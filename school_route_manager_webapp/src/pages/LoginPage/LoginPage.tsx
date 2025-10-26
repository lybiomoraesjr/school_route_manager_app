import { useEffect, useState } from "react";
import { z } from "zod";
import { Eye, EyeSlash } from "phosphor-react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Group,
  Paper,
  Title,
  Text,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { AppRoutes } from "../../constants/routes.constants";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();
  const { signIn, isLoadingUserStorageData, isAuthenticated } = useAuth();

  // Zod schema
  const loginSchema = z.object({
    email: z.string().email({ message: "E-mail inválido" }),
    password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
  });

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("remember-email");
    if (storedEmail) {
      setEmail(storedEmail);
      setRemember(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(AppRoutes.HOME, { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setGeneralError("");
    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors: { email?: string; password?: string } = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0] === "email") fieldErrors.email = err.message;
        if (err.path[0] === "password") fieldErrors.password = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    try {
      await signIn({ email, password });
      if (remember) {
        sessionStorage.setItem("remember-email", email);
      } else {
        sessionStorage.removeItem("remember-email");
      }
      navigate(AppRoutes.HOME, { replace: true });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Não foi possível acessar sua conta.";
      setGeneralError(message);
    }
  };

  return (
    <Group
      justify="center"
      align="center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #e0e7ff 0%, #f0f4ff 100%)",
      }}
    >
      <Paper
        shadow="md"
        radius={18}
        p={32}
        withBorder
        style={{ width: "100%", maxWidth: 400 }}
      >
        <Title order={2} ta="center" mb={2}>
          Acesse sua Conta
        </Title>
        <Text c="dimmed" size="md" ta="center" mb={16}>
          Software de gerenciamento de rotas escolares.
        </Text>
        {generalError && (
          <Text c="red" size="sm" ta="center" mb={12}>
            {generalError}
          </Text>
        )}
        <form onSubmit={handleSubmit}>
          <TextInput
            label="E-mail"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            id="email"
            required
            size="md"
            radius={8}
            mb={errors.email ? 4 : 16}
          />
          {errors.email && (
            <Text c="red" size="sm" mt={2} mb={12}>
              {errors.email}
            </Text>
          )}
          <PasswordInput
            label="Senha"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            id="password"
            required
            size="md"
            radius={8}
            mb={errors.password ? 4 : 8}
            visibilityToggleIcon={({ reveal }) =>
              reveal ? <EyeSlash size={20} /> : <Eye size={20} />
            }
          />
          {errors.password && (
            <Text c="red" size="sm" mt={2} mb={12}>
              {errors.password}
            </Text>
          )}
          <Group justify="space-between" mt={8} mb={8}>
            <Checkbox
              label="Lembrar-me"
              checked={remember}
              onChange={(e) => setRemember(e.currentTarget.checked)}
              size="sm"
            />
            <a
              href="#"
              style={{ color: "#2563eb", fontSize: 15, textDecoration: "none" }}
            >
              Esqueceu sua senha?
            </a>
          </Group>
          <Button
            type="submit"
            fullWidth
            size="md"
            radius={8}
            mt={8}
            loading={isLoadingUserStorageData}
            disabled={isLoadingUserStorageData}
          >
            Entrar
          </Button>
        </form>
      </Paper>
    </Group>
  );
};
export default LoginPage;

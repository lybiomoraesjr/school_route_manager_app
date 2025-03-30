import { useForm, zodResolver } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Stack,
} from "@mantine/core";
import {
  LoginFormValues,
  loginSchema,
} from "@/features/auth/model/login.schema";

export const LoginForm = () => {
  const form = useForm<LoginFormValues>({
    validate: zodResolver(loginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: LoginFormValues) => {
    console.log("Login enviado:", values);
  };

  return (
    <Paper radius="md" p="xl" withBorder maw={400} mx="auto" mt="xl">
      <Title order={3} ta="center" mb="md">
        Acesse a conta
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            withAsterisk
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            withAsterisk
            {...form.getInputProps("password")}
          />

          <Button type="submit" fullWidth>
            Acessar
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

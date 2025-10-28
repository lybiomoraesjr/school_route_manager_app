

import { useState } from 'react';
import { Eye, EyeSlash } from 'phosphor-react';
import { TextInput, PasswordInput, Checkbox, Button, Group, Paper, Title, Text } from '@mantine/core';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <Group justify="center" align="center" style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #e0e7ff 0%, #f0f4ff 100%)' }}>
      <Paper shadow="md" radius={18} p={32} withBorder style={{ width: '100%', maxWidth: 400 }}>
        <Title order={2} ta="center" mb={2}>
          Acesse sua Conta
        </Title>
        <Text c="dimmed" size="md" ta="center" mb={16}>
          Software de gerenciamento de rotas escolares.
        </Text>
        <form>
          <TextInput
            label="E-mail"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            id="email"
            type="email"
            required
            size="md"
            radius={8}
            mb={16}
          />
          <PasswordInput
            label="Senha"
            placeholder="Sua senha"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            id="password"
            required
            size="md"
            radius={8}
            mb={8}
            visibilityToggleIcon={({ reveal }) =>
              reveal ? <EyeSlash size={20} /> : <Eye size={20} />
            }
          />
          <Group justify="space-between" mt={8} mb={8}>
            <Checkbox
              label="Lembrar-me"
              checked={remember}
              onChange={e => setRemember(e.currentTarget.checked)}
              size="sm"
            />
            <a href="#" style={{ color: '#2563eb', fontSize: 15, textDecoration: 'none' }}>
              Esqueceu sua senha?
            </a>
          </Group>
          <Button type="submit" fullWidth size="md" radius={8} mt={8}>
            Entrar
          </Button>
        </form>
      </Paper>
    </Group>
  );
}
export default LoginPage;

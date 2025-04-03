import { Burger, Group, Text } from "@mantine/core";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const Header = ({ opened, toggle }: HeaderProps) => {
  return (
    <Group h="100%" px="md">
      <Burger opened={opened} onClick={toggle} size="sm" />
      <Text fw={700} size="lg">
        Logo
      </Text>
    </Group>
  );
};

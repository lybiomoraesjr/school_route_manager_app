import { User } from "@/features/auth/model/user.model";
import { Header, Sidebar } from "@/shared/layouts/Layout/components";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface LayoutProps {
	children: React.ReactNode;
	user: User;
}

export const Layout: React.FC<LayoutProps> = ({ children, user }) => {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { mobile: !opened, desktop: !opened },
			}}
			padding="md"
		>
			<AppShell.Header>
				<Header opened={opened} toggle={toggle} />
			</AppShell.Header>

			<AppShell.Navbar p="md">
				<Sidebar role={user.role} />
			</AppShell.Navbar>

			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
};

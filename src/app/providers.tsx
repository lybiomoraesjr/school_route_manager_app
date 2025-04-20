import { AuthContextProvider } from "@/shared/context";
import { theme } from "@/theme";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<MantineProvider theme={theme}>
			<AuthContextProvider>
				<BrowserRouter>{children}</BrowserRouter>
			</AuthContextProvider>
		</MantineProvider>
	);
};

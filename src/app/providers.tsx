import { dateSettings } from "@/config/dates.config";
import { AuthContextProvider } from "@/shared/context";
import { theme } from "@/theme";
import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { BrowserRouter } from "react-router-dom";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<DatesProvider settings={dateSettings}>
			<MantineProvider theme={theme}>
				<AuthContextProvider>
					<BrowserRouter>{children}</BrowserRouter>
				</AuthContextProvider>
			</MantineProvider>
		</DatesProvider>
	);
};

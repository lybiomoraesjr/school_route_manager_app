import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "@/shared/context";

import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Notifications } from "@mantine/notifications";

import { dateSettings } from "@/config/dates.config";
import { theme } from "@/theme";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<DatesProvider settings={dateSettings}>
			<MantineProvider theme={theme}>
				<Notifications />
				<AuthContextProvider>
					<BrowserRouter>{children}</BrowserRouter>
				</AuthContextProvider>
			</MantineProvider>
		</DatesProvider>
	);
};

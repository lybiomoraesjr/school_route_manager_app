import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "@/features/auth/context/AuthContext";

import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Notifications } from "@mantine/notifications";

import { dateSettings } from "@/config/dates.config";
import { theme } from "@/theme";
import { env } from "@/config/env";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<DatesProvider settings={dateSettings}>
			<MantineProvider theme={theme}>
				<Notifications />
				<AuthContextProvider>
					<BrowserRouter basename={env.VITE_BASE_PATH}>
						{children}
					</BrowserRouter>
				</AuthContextProvider>
			</MantineProvider>
		</DatesProvider>
	);
};

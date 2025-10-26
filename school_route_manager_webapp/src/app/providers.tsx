import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { DatesProvider } from "@mantine/dates";
import { AuthContextProvider } from "../contexts/AuthContext";
import type { ReactNode } from "react";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <DatesProvider
          settings={{ locale: "pt-BR", firstDayOfWeek: 0, weekendDays: [0] }}
        >
          <MantineProvider>{children}</MantineProvider>
        </DatesProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default AppProviders;

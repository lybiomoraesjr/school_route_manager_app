import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <MantineProvider>{children}</MantineProvider>
    </BrowserRouter>
  );
};

export default AppProviders;

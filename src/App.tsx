import AppRoutes from "@/routes/AppRoutes";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;

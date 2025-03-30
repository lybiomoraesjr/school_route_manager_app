import { AppProviders } from "@/app/providers";
import AppRoutes from "@/app/routes";

const App = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};

export default App;

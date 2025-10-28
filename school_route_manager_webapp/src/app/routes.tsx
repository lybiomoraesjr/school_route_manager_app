import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import LoginPage from "../pages/LoginPage/LoginPage";
import RootLayout from "../../layout/RootLayout";

const user = true;

const PrivateRoute = () => {
  return user ? (
    <RootLayout>
      <Outlet />
    </RootLayout>
  ) : (
    <Navigate to="/" />
  );
};

const PublicRoute = () => {
  return user ? <Navigate to="/" /> : <Outlet />;
};

const AppRoutesComponent = () => {
  return (
    <Routes>

            <Route element={<PublicRoute />}>
              <Route path="/" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
  );
};

export default AppRoutesComponent;

import Home from "@/pages/Home/Home";
import LoginPage from "@/pages/LoginPage/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";

const user = true;

const PrivateRoute = () => {
  return user ? <Outlet /> : <Navigate to="/" />;
};

const PublicRoute = () => {
  return user ? <Navigate to="/home" /> : <Outlet />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;

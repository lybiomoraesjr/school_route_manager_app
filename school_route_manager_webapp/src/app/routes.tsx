import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Center, Loader } from "@mantine/core";

import Dashboard from "../pages/Dashboard/Dashboard";
import LoginPage from "../pages/LoginPage/LoginPage";
import RootLayout from "../../layout/RootLayout";
import NotFoundPage from "../pages/NotFound/NotFound";
import StudentManagement from "../pages/StudentManagement/StudentManagement";
import { AppRoutes } from "../constants/routes.constants";
import StopManager from "../pages/StopManager/StopManager";
import RouteManager from "../pages/RouteManager/RouteManager";
import { useAuth } from "../contexts/AuthContext";

const LoadingScreen = () => (
  <Center h="100vh">
    <Loader color="blue" />
  </Center>
);

const PrivateRoute = () => {
  const { isAuthenticated, isLoadingUserStorageData } = useAuth();

  if (isLoadingUserStorageData) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return <Navigate to={AppRoutes.LOGIN} replace />;
  }

  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};

const PublicRoute = () => {
  const { isAuthenticated, isLoadingUserStorageData } = useAuth();

  if (isLoadingUserStorageData) {
    return <LoadingScreen />;
  }

  return isAuthenticated ? (
    <Navigate to={AppRoutes.HOME} replace />
  ) : (
    <Outlet />
  );
};

const AppRoutesComponent = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path={AppRoutes.HOME} element={<Dashboard />} />
        <Route path={AppRoutes.STUDENTS} element={<StudentManagement />} />
        <Route
          path={AppRoutes.STOPS}
          element={<StopManager />}
        />
        <Route path={AppRoutes.ROUTES} element={<RouteManager />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutesComponent;

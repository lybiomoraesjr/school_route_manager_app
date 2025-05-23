import Home from "@/features/home/ui/Home";
import LoginPage from "@/features/auth/ui/LoginPage";
import NotFoundPage from "@/shared/ui/NotFoundPage";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Layout } from "@/shared/layouts";
import DriverPage from "@/features/driver/ui/DriverPage";
import StudentPage from "@/features/student/ui/StudentPage";
import SchoolPage from "@/features/school/ui/SchoolPage";
import MonitorPage from "@/features/monitor/ui/MonitorPage";
import VehiclePage from "@/features/vehicles/ui/VehiclePage";
import StopPage from "@/features/stop/ui/StopPage";
import RoutePage from "@/features/route/ui/RoutePage";
import GuardianPage from "@/features/guardian/ui/GuardianPage";
import { AppRoutes } from "@/shared/constants/routes.constants";
import { useContext } from "react";
import { AuthContext } from "@/shared/context/AuthContext";

const { user } = useContext(AuthContext);

const PrivateRoute = () => {
	return user ? (
		<Layout user={user}>
			<Outlet />
		</Layout>
	) : (
		<Navigate to={AppRoutes.LOGIN} />
	);
};

const PublicRoute = () => {
	return user ? <Navigate to={AppRoutes.HOME} /> : <Outlet />;
};

const AppRoutesComponent = () => {
	return (
		<Routes>
			<Route element={<PublicRoute />}>
				<Route path={AppRoutes.LOGIN} element={<LoginPage />} />
			</Route>

			<Route element={<PrivateRoute />}>
				<Route path={AppRoutes.HOME} element={<Home />} />
				<Route path={AppRoutes.DRIVERS} element={<DriverPage />} />
				<Route path={AppRoutes.STUDENTS} element={<StudentPage />} />
				<Route path={AppRoutes.SCHOOLS} element={<SchoolPage />} />
				<Route path={AppRoutes.MONITORS} element={<MonitorPage />} />
				<Route path={AppRoutes.VEHICLES} element={<VehiclePage />} />
				<Route path={AppRoutes.STOPS} element={<StopPage />} />
				<Route path={AppRoutes.ROUTES} element={<RoutePage />} />
				<Route path={AppRoutes.GUARDIANS} element={<GuardianPage />} />
			</Route>

			<Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRoutesComponent;

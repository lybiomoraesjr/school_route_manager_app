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

const user = true;

const PrivateRoute = () => {
	return user ? (
		<Layout>
			<Outlet />
		</Layout>
	) : (
		<Navigate to="/" />
	);
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
				<Route path="/motoristas" element={<DriverPage />} />
				<Route path="/estudantes" element={<StudentPage />} />
				<Route path="/escolas" element={<SchoolPage />} />
				<Route path="/monitores" element={<MonitorPage />} />
				<Route path="/veiculos" element={<VehiclePage />} />
				<Route path="/paradas" element={<StopPage />} />
				{/* <Route path="/routes" element={<RoutesPage />} />
				 */}
			</Route>

			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRoutes;

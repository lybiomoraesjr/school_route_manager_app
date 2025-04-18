import Home from "@/features/home/ui/Home";
import LoginPage from "@/features/auth/ui/LoginPage";
import NotFoundPage from "@/shared/ui/NotFoundPage";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Layout } from "@/shared/layouts";
import StudentPage from "@/features/students/ui/StudentPage";
import DriverPage from "@/features/driver/ui/DriverPage";

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
				{/* <Route path="/routes" element={<RoutesPage />} /> */}
				{/* <Route path="/schools" element={<SchoolsPage />} />
				<Route path="/stops" element={<StopsPage />} />
				<Route path="/monitors" element={<MonitorsPage />} />
				<Route path="/vehicles" element={<VehiclesPage />} />
				<Route path="/settings" element={<SettingsPage />} /> */}
			</Route>

			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRoutes;

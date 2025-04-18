import Home from "@/features/home/ui/Home";
import LoginPage from "@/features/auth/ui/LoginPage";
import NotFoundPage from "@/shared/ui/NotFoundPage";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Layout } from "@/shared/layouts";
import StudentPage from "@/features/students/ui/StudentPage";

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
				<Route path="/home" element={<StudentPage />} />
			</Route>

			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRoutes;

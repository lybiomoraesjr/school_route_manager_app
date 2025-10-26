import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
		plugins: [react()],
		base: env.VITE_BASE_PATH || "/school_route_manager_app/",
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
				"@components": path.resolve(__dirname, "./src/components"),
				"@hooks": path.resolve(__dirname, "./src/hooks"),
				"@pages": path.resolve(__dirname, "./src/pages"),
				"@context": path.resolve(__dirname, "./src/context"),
				"@services": path.resolve(__dirname, "./src/services"),
				"@validators": path.resolve(__dirname, "./src/validators"),
				"@utils": path.resolve(__dirname, "./src/utils"),
				"@theme": path.resolve(__dirname, "./src/theme"),
				"@enums": path.resolve(__dirname, "./src/enums"),
				"@types": path.resolve(__dirname, "./src/types"),
			},
		},
	};
});

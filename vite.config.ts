import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths(), eslintPlugin({ failOnError: false, fix: true }), react()],
    server: {
        port: 3000,
        open: true
    }
});

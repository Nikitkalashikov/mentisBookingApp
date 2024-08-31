import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "")
	return {
		plugins: [react()],
		define: {
			"process.env.VITE_DOCTORS_URL": JSON.stringify(env.VITE_DOCTORS_URL),
			"process.env.VITE_TOKEN_URL": JSON.stringify(env.VITE_TOKEN_URL),
			"process.env.VITE_USERNAME": JSON.stringify(env.VITE_USERNAME),
			"process.env.VITE_PASSWORD": JSON.stringify(env.VITE_PASSWORD),
		},
	}
})

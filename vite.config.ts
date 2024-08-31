import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// })

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "")
	return {
		plugins: [react()],
		define: {
			__VITE_DOCTORS_URL__: JSON.stringify(env.VITE_DOCTORS_URL),
			__VITE_TOKEN_URL__: JSON.stringify(env.VITE_TOKEN_URL),
			__VITE_USERNAME__: JSON.stringify(env.VITE_USERNAME),
			__VITE_PASSWORD__: JSON.stringify(env.VITE_PASSWORD),
		},
	}
})

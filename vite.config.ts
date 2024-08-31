import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	plugins: [react()],
	define: {
		"process.env.VITE_DOCTORS_URL": JSON.stringify(
			process.env.VITE_DOCTORS_URL || ""
		),
		"process.env.VITE_TOKEN_URL": JSON.stringify(
			process.env.VITE_TOKEN_URL || ""
		),
		"process.env.VITE_USERNAME": JSON.stringify(
			process.env.VITE_USERNAME || ""
		),
		"process.env.VITE_PASSWORD": JSON.stringify(
			process.env.VITE_PASSWORD || ""
		),
	},
})

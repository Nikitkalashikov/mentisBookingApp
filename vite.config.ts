import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dotenv from "dotenv"

// export default defineConfig({
// 	plugins: [react()],
// })

export default defineConfig(() => {
	dotenv.config()

	return {
		plugins: [react()],
	}
})

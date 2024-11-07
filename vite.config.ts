import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
	plugins: [react()],
	envPrefix: "MENTIS_",
	resolve: {
		alias: {
			"@components": resolve(__dirname, "src/components"),
			"@pages": resolve(__dirname, "src/pages"),
			"@services": resolve(__dirname, "src/services"),
			"@hooks": resolve(__dirname, "src/hooks"),
			"@icons": resolve(__dirname, "src/assets/icons"),
			"@img": resolve(__dirname, "src/assets/images"),
			"@utils": resolve(__dirname, "src/utils"),
			"@store": resolve(__dirname, "src/store"),
		},
	},
})

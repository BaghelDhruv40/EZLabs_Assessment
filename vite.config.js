import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
	plugins: [
		react(),
		Unfonts({
			google: {
				families: [
					{ name: "Instrument Sans", styles: "wght@400;500;600" },
					{ name: "Halant", styles: "wght@400;500;600" },
					{ name: "Island Moments", styles: "wght@400;500;600" },
				],
			},
		}),
	],
});

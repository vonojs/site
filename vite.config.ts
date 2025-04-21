import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { CloudflareAdaptor, vono } from "@vonojs/vite";
import { defineConfig } from "vite";
import rehypeShiki from "@shikijs/rehype";

export default defineConfig({
	plugins: [
		tailwindcss(),
		vono({
			server: "src/server/index.ts",
			adaptor: CloudflareAdaptor,
			preserveHtml: false,
		}),
		mdx({
			providerImportSource: "@mdx-js/react",
			rehypePlugins: [
				[rehypeShiki, { themes: { light: "catppuccin-latte", dark: "catppuccin-mocha" } }],
			]
		}),
		react(),
	],
	build: {
		rollupOptions: {
			input: "src/client/main.html",
		},
	},
});

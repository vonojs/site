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
				[rehypeShiki, {
					themes: {
						nord: "nord",
						"nord-light": "min-light",
						"cat-latte": "catppuccin-latte",
						"cat-mocha": "catppuccin-mocha",
						"gruvbox": "gruvbox-dark-soft",
						"gruvbox-light": "gruvbox-light-soft",
						"light": "min-light",
						"dark": "min-dark",
						"rosepine-light": "rose-pine-dawn",
						"rosepine-dark": "rose-pine",
					},
					defaultColor: false,
				}],
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

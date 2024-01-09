import vono from "@vonojs/vono";
import { defineConfig } from "vite";
import { cloudflare } from "@vonojs/vono/adapters";
import uno from "unocss/vite";

export default defineConfig({
	plugins: [
		uno(),
		vono({
			adapter: cloudflare({
				name: "vono-site",
			}),
		}),
	],
	build: {
		rollupOptions: {
			input: "ui/client.entry.tsx",
		},
		assetsInlineLimit: 24000,
	},
});
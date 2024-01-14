import vono from "@vonojs/vono";
import { defineConfig } from "vite";
import { cloudflare } from "@vonojs/vono/adapters";
import content from "@gaiiaa/content";
import uno from "unocss/vite";

export default defineConfig({
	plugins: [
		uno(),
		content(),
		vono({
			adapter: cloudflare({
				name: "vono-site",
			}),
			prerender: {
				routes: [
					"/",
					"/docs",
					"/docs/quickstart",
					"/docs/philosophy",
					"/docs/adaptors",
					"/docs/manifest",
					"/docs/rpc",
				],
			},
		}),
	],
	build: {
		rollupOptions: {
			input: "ui/client.entry.tsx",
			external: ["node:url"]
		},
		assetsInlineLimit: 24000,
	},
});

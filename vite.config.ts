import vono from "@vonojs/vono";
import { defineConfig } from "vite";
import { cloudflare } from "@vonojs/vono/adapters";
import content from "@gaiiaa/content";
import uno from "unocss/vite";
import preact from "@preact/preset-vite";

export default defineConfig({
	plugins: [
		preact(),
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
					"/philosophy",
					"/quickstart"
				],
			},
		}),
	],
	build: {
		rollupOptions: {
			input: "ui/client.entry.tsx",
			external: ["node:url"],
		},
		// assetsInlineLimit: 24000,
	},
});

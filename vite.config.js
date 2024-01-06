import vono from "@vonojs/vono";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { cloudflare } from "@vonojs/vono/adapters";
import uno from "unocss/vite";

export default defineConfig({
	plugins: [
    uno(),
    solid({ ssr: true }),
    vono({ adapter: cloudflare() }),
  ],
	build: {
		rollupOptions: {
			input: "/ui/entry.tsx",
		},
	},
});

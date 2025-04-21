/// <reference types="@vonojs/vite/server" />

import { Hono } from "hono";
import shell from "#vono/html";
import type { PageMeta } from "../client/lib/router.ts";
import { makeAppStore } from "../client/lib/state.ts";

let app = new Hono();

let headTagsFromMeta = (meta: PageMeta) => {
	return [
		`<meta name="description" content="${meta.description}">`,
		`<meta property="og:title" content="${meta.og?.title ?? meta.title}">`,
		`<meta property="og:description" content="${meta.og?.description ?? meta.description}">`,
		`<meta property="og:image" content="${meta.og?.image ?? "/ogimage.png"}">`,
		`<title>${meta.title}</title>`,
	].join("\n");
};

app.get("/*", async (c) => {
	let state = makeAppStore({ path: c.req.path }).getState();
	return c.html(
		shell.replace("%head%", headTagsFromMeta(state.router.page.meta)),
	);
});

export default app;

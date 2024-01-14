import { Hono } from "hono";
import manifest from "#vono/manifest";
import { getDocument, getMeta, search } from "./documentation";

const app = new Hono()
	.get("/ping", (c) => c.html("pong"))

	.get("/api/docs/list", async (c) => {
		return c.json(getMeta());
	})

	.get("/api/docs/get/:slug", async (c) => {
		return c.json(getDocument(c.req.param("slug")));
	})

	.get("/api/docs/search/:query", async (c) => {
		const searchResults = search(c.req.param("query"));
		const render = await import("./render").then((x) => x.default);
		return c.html("<!DOCTYPE html>\n" + (await render(c)));
	})

	.get("/api/manifest", (c) => c.json(manifest))

	.get("*", async (c) => {
		const render = await import("./render").then((x) => x.default);
		return c.html("<!DOCTYPE html>\n" + (await render(c)));
	});

export default app;

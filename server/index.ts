import { Hono } from "hono";
import manifest from "#vono/manifest"


const app = new Hono()
	.get("/ping", (c) => c.html("pong"))

	.get("/fragments/*", async (c) => {
		// need to render a screen and send it down.
	})

	.get("/__manifest", c => c.json(manifest))

	.get("*", async (c) => {
		const render = await import("./render").then((x) => x.default);
		return c.html("<!DOCTYPE html>\n" + await render(c));
	});

export default app;

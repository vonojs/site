import { Hono } from "hono";

const app = new Hono()
	.get("/ping", (c) => c.html("pong"))

	.get("*", async (c) => {
		const render = await import("./render").then((x) => x.default);
		const { readable, writable } = new TransformStream();
		render(c).pipeTo(writable);
		return new Response(readable, {
			headers: { "content-type": "text/html" },
		});
	});

export default app;

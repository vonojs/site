import { Hono } from "hono";
import render from "./render";

const app = new Hono();

app.get("*", async (c) => {
	return c.html(render(c));
});

export default app;

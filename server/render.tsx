import { Hydration, renderToStream } from "solid-js/web";
import { Shell } from "./shell";
import App from "../ui/App";
import { type Context } from "hono";

export default function render(c: Context) {
	const pathname = new URL(c.req.url).pathname;
	return renderToStream(() => (
		<Shell>
			<Hydration>
				<App pathname={pathname} />
			</Hydration>
		</Shell>
	));
}

import { Context } from "hono";
import { useRequestContext } from "hono/jsx-renderer";

export const Route = (props: {
	match: string | ((req: Context["req"]) => boolean);
	component?: any;
	children?: any;
}) => {
	const ctx = useRequestContext();
	const match =
		typeof props.match === "function"
			? props.match(ctx.req)
			: props.match === ctx.req.path;
	if (match) {
		return props.component ? props.component : props.children;
	}
	return <></>
};
import manifest from "#vono/manifest";
import Shell from "../ui/shell.tsx";
import { type Context } from "hono";
import { renderToString } from "preact-render-to-string";

export default function render(c: Context) {
	return (
		"<!DOCTYPE html>" +
		renderToString(
			<Shell
				head={
					<>
						<title>Vono</title>
						{import.meta.env.PROD &&
							manifest["ui/client.entry.tsx"].css?.map((css) => (
								<link rel="stylesheet" href={"/" + css} />
							))}
					</>
				}
				path={c.req.path}
				scripts={
					<script
						type="module"
						src={"/" + manifest["ui/client.entry.tsx"].file}
					/>
				}
			/>
		)
	);
}

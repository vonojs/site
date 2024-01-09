import manifest from "#vono/manifest";
import App from "../ui/server.entry.tsx";
import { type Context } from "hono";
import { RequestContext } from "hono/jsx-renderer";

export default function render(c: Context) {
	const assets = manifest["ui/client.entry.tsx"].css?.map((css) => (
		<link rel="stylesheet" href={css} />
	));
	return (
		<RequestContext.Provider value={c}>
			<App
				head={
					<>
						<title>Vono</title>
						{import.meta.env.PROD && { assets }}
					</>
				}
				scripts={
					<script type="module" src={manifest["ui/client.entry.tsx"].file} />
				}
			/>
		</RequestContext.Provider>
	);
}

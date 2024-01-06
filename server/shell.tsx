import manifest from "#vono/manifest";
import { HydrationScript, NoHydration, ssr } from "solid-js/web";

const DOCTYPE = () => <>{ssr("<!DOCTYPE html>") as any}</>

export function Shell(props: any) {
	return (
		<NoHydration>
			<DOCTYPE />
			<html>
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					{import.meta.env.DEV && <script type="module" src="/@vite/client" />}
					{props.head}
					<HydrationScript />
				</head>
				<body>
					<div id="app">{props.children}</div>
					<script type="module" src={manifest["/ui/entry.tsx"].file} />
				</body>
			</html>
		</NoHydration>
	);
}

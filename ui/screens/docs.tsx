import { Renderer } from "../components/docs/renderer";
import { getDocument, getMeta } from "../../server/documentation";
import { useRequestContext } from "hono/jsx-renderer";

export const Docs = () => {
	const path = useRequestContext().req.path;
	const match = path.match(/\/docs\/(.*)/);
	let slug = "quickstart";
	if (match?.[1]) {
		slug = match[1];
	}
	return (
		<section w-full max-w-2xl mx-auto pt-30 p-4>
			<aside p-4 text-vite-600 dark:text-vite-300>
				<div font-code text-sm text-vite-800 dark:text-vite-400>docs</div>
				<div py-1 />
				<ul space-y-1>
				{getMeta().map((m) => (
					<li><a href={`/docs/${m.slug}`}>{m.title}</a></li>
				))}
				</ul>
			</aside>
			<article w-full>
				<Renderer content={getDocument(slug) as object} />
			</article>
		</section>
	);
};

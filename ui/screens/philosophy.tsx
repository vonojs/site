import { Renderer } from "../components/docs/renderer";
import doc from "./philosophy.md";

export const Philosophy = () => (
	<section className="w-full max-w-2xl mx-auto pt-30 p-4">
		<article className="w-full">
			<Renderer content={doc} />
		</article>
	</section>
);

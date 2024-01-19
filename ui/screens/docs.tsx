import { Renderer } from "../components/docs/renderer";
import doc from "./docs.md";


export const Docs = () => (
	<section w-full max-w-2xl mx-auto pt-30 p-4>
		<article w-full>
			<Renderer content={doc} />
		</article>
	</section>
);

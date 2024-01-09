import { Footer } from "./footer";
import { Navigation } from "./navigation";

export default function Layout(props: { children: any }) {
	return (
		<div>
			<Navigation />
			<main class="w-full mx-auto">{props.children}</main>
			<Footer />
		</div>
	);
}


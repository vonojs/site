import { Footer } from "./components/common/footer";
import { Navigation } from "./components/common/navigation";
import { Docs } from "./screens/docs";
import { Home } from "./screens/home";
import { Philosophy } from "./screens/philosophy";
import { Quickstart } from "./screens/quickstart";

export const App = (props: { path?: string }) => {
  const path = props.path ?? window.location.pathname;
	return (
		<>
			<Navigation />
			<main className="max-w-screen overflow-hidden">
				{path === "/" && <Home />}
				{path.startsWith("/docs") && <Docs />}
				{/* {path.startsWith("/quickstart") && <Quickstart />}
				{path.startsWith("/philosophy") && <Philosophy />} */}
			</main>
			<Footer />
		</>
	);
};

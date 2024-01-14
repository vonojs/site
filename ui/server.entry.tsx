import { Docs } from "./screens/docs";
import { Home } from "./screens/home";
import { useRequestContext } from "hono/jsx-renderer";
import { Navigation } from "./components/common/navigation";
import { Footer } from "./components/common/footer";

const App = (props: { head: any; scripts: any }) => {
	const path = useRequestContext().req.path;
	return (
		<html>
			<head lang="en">
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{props.head}
			</head>
			<body>
				<Navigation />
				<main max-w-screen overflow-hidden>
					{path === "/" && <Home />}
					{path.startsWith("/docs") && <Docs />}
				</main>
				<Footer />
				{props.scripts}
			</body>
		</html>
	);
};
export default App;

import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { Route } from "../modules/Route";
import { Philosophy } from "./screens/philosophy";
import { Docs } from "./screens/docs";
import { Home } from "./screens/home";
import Layout from "./components/layout";

const App = (props: { head: any; scripts: any }) => (
	<html>
		<head lang="en">
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{props.head}
		</head>
		<body>
			<Layout>
				<Route match="/">
					<Home />
				</Route>
				<Route match={({ path }) => path.startsWith("/docs")}>
					<Docs />
				</Route>
				<Route match="/philosophy">
					<Philosophy />
				</Route>
			</Layout>
			{props.scripts}
		</body>
	</html>
);
export default App;

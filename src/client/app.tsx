import { Box, Main, ThemeProvider } from "@100x/webtui-react";
import { Route, Switch } from "wouter";
import Footer from "./components/footer.tsx";
import { Nav } from "./components/nav.tsx";
import { State } from "./lib/state.ts";
import Docs from "./views/docs.tsx";
import Examples from "./views/examples.tsx";
import Home from "./views/home.tsx";

export let onRouteChange = () => void 0;

for (let event of ["pushState", "popstate"]) {
	addEventListener(event, () => {
		onRouteChange();
	});
}

export let App = () => {
	let theme = State.useSelection((state) => state.theme);

	let page = State.useSelection((x) => x.router.page);

	let { actions, dispatch } = State.useActions();

	onRouteChange = () => {
		dispatch(actions.routeChange({ path: location.pathname }));
	};

	return (
		<ThemeProvider
			colorTheme={theme.themeValues}
			selectors={{
				tiny: "@media (width >= 40rem)",
				small: "@media (width >= 48rem)",
				medium: "@media (width >= 64rem)",
				large: "@media (width >= 80rem)",
				wide: "@media (width >= 96rem)",
			}}
		>
			<title>{page.meta.title}</title>
			<Box
				css={{
					height: "100vh",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Nav />
				<Main
					css={{
						flexGrow: 1,
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						overflowX: "hidden",
						overflowY: "scroll",
					}}
				>
					<Switch>
						<Route path={"/"}>
							<Home />
						</Route>
						<Route path={"/docs*"} nest>
							<Docs />
						</Route>
						<Route path={"/examples*"} nest>
							<Examples />
						</Route>
					</Switch>
				</Main>
				<Footer />
			</Box>
		</ThemeProvider>
	);
};

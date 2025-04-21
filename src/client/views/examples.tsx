import { Box, Heading, ToggleGroup } from "@100x/webtui-react";
import { useState } from "react";
import { Link, Route, Switch, useRoute } from "wouter";

let Header = () => {
	let [value, setValue] = useState("simple");

	let setRoute = (v: string) => setValue(v.length === 0 ? value : v);

	let [, params] = useRoute(":example");

	return (
		<Box className={"flex items-center gap-2"}>
			<Heading.H1>Examples</Heading.H1>
			<Box>
				<ToggleGroup.Root
					type={"single"}
					value={params?.example ?? "simple"}
					onValueChange={setRoute}
				>
					<ToggleGroup.Item value={"simple"} asChild>
						<Link href={"/simple"}>Simple</Link>
					</ToggleGroup.Item>
					<ToggleGroup.Item value={"complex"} asChild>
						<Link href={"/complex"}>Complex</Link>
					</ToggleGroup.Item>
				</ToggleGroup.Root>
			</Box>
		</Box>
	);
};

let SimpleExample = () => (
	<>
		<title>vono.js | examples - simple</title>
		<iframe
			key={"simples"}
			style={{
				width: "100%",
				height: "100%",
				zIndex: 100,
				padding: 0,
				margin: 0,
			}}
			src="https://codesandbox.io/p/sandbox/react-new?file=/src/index.js"
		/>
	</>
);

let ComplexExample = () => (
	<>
		<title>vono.js | examples - complex</title>
		<iframe
			key={"complex"}
			style={{
				width: "100%",
				height: "100%",
				zIndex: 100,
				padding: 0,
				margin: 0,
			}}
			src="https://codesandbox.io/p/sandbox/react-new?file=/src/index.js"
		/>
	</>
);

export default () => {
	return (
		<Box
			border
			borderColor={"var(--background0)"}
			css={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Header />
			<Box
				border
				pad={"none"}
				css={{
					flexGrow: 1,
					marginTop: "1lh",
					minHeight: "500px",
					overflow: "scroll",
				}}
			>
				<Switch>
					<Route path={"/complex"}>
						<ComplexExample />
					</Route>
					<Route>
						<SimpleExample />
					</Route>
				</Switch>
			</Box>
		</Box>
	);
};

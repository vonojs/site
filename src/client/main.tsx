import "./main.css";
import * as Components from "@100x/webtui-react";
import { Heading, Text } from "@100x/webtui-react";
import { MDXProvider } from "@mdx-js/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./app.tsx";
import Link from "./components/link.tsx";
import { makeAppStore } from "./lib/state";

declare module "@100x/webtui-react" {
	export interface ExtendedCssProperties {
		tiny?: ExtendedCssProperties;
		small?: ExtendedCssProperties;
		medium?: ExtendedCssProperties;
		large?: ExtendedCssProperties;
		wide?: ExtendedCssProperties;
	}
}

let store = makeAppStore({ path: location.pathname });

let mdxComponents = {
	h1: Heading.H1,
	h2: Heading.H2,
	h3: Heading.H3,
	h4: Heading.H4,
	h5: Heading.H5,
	h6: Heading.H6,
	p: Text,
	Link,
	...Components,
} as any;

createRoot(document.querySelector("app-root")!).render(
	<StrictMode>
		<Provider store={store}>
			<MDXProvider components={mdxComponents}>
				<App />
			</MDXProvider>
		</Provider>
	</StrictMode>,
);

import * as jsx from "hono/jsx/jsx-runtime";
import { toJSX } from "@gaiiaa/content";
import * as headers from "./headers";
import { P } from "./text";
import { Code } from "../common/code";

export const Renderer = (props: { content: object }) => {
	return toJSX(
		props.content,
		{
			jsx: jsx.jsx,
			jsxs: jsx.jsxs,
			Fragment: jsx.Fragment,
		},
		{
			h1: headers.H1,
			h2: headers.H2,
			h3: headers.H3,
			h4: headers.H4,
			h5: headers.H5,
			p: P,
			code: Code,
		}
	);
};

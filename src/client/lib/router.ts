import { createAction, createSlice } from "@reduxjs/toolkit";
import type { ReactElement } from "react";

export type PageMeta = {
	title: string;
	description?: string;
	og?: {
		title?: string;
		description?: string;
		image?: string;
	};
};

export let actionRouteChange = createAction<{ path: string }>("routeChange");

interface RouteState {
	path: string;
	page?: {
		Component?: (props: unknown) => ReactElement;
		meta: PageMeta;
	};
}

let defaultMeta = {
	title: "Vono.js - Build fullstack apps with Vite",
	description: "Vono.js is a Vite plugin that adds a server endpoint to your client app and can deploy to cloudflare, netlify, and more."
};

export let routerSlice = (args: { path: string }) =>
	createSlice({
		name: "router",
		initialState: {
			path: args.path,
			page: getPage(args.path),
		} satisfies RouteState,
		reducers: {
			notFound: () => {
				location.href = "/";
			},
		},
		extraReducers: ({ addCase }) => {
			addCase(actionRouteChange, (state, action) => {
				state.path = action.payload.path;
				state.page = getPage(action.payload.path);
			});
		},
	});

let pages = Object.entries(
	import.meta.glob<any>("../../../pages/**/*.mdx", { eager: true }),
).reduce(
	(acc, [path, doc]) => {
		path = path.replace("../../../pages", "").replace(".mdx", "");
		acc[path] = {
			Component: doc.default,
			meta: doc.meta ?? {},
		};
		return acc;
	},
	{} as Record<
		string,
		{ Component: (props: unknown) => ReactElement; meta: PageMeta }
	>,
);

let getPage = (path: string) => {
	if (path in pages) {
		return {
			Component: pages[path].Component,
			meta: {
				...defaultMeta,
				...pages[path].meta
			},
		}
	}
	if (stripTrailingSlash(path) + "/index" in pages) {
		let page = pages[stripTrailingSlash(path) + "/index"];
		return {
			Component: page.Component,
			meta: {
				...defaultMeta,
				...page.meta
			},
		}
	}
	return {
		Component: undefined,
		meta: defaultMeta,
	};
};

let stripTrailingSlash = (path: string) => {
	if (path.endsWith("/")) {
		return path.slice(0, -1);
	}
	return path;
};

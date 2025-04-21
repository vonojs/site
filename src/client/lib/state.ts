import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { actionRouteChange, routerSlice } from "./router.ts";
import { themeSlice } from "./theme";

export const makeAppStore = (args: { path: string }) =>
	configureStore({
		reducer: {
			theme: themeSlice.reducer,
			router: routerSlice({ path: args.path }).reducer,
		},
	});

export let actions = {
	routeChange: actionRouteChange,
	theme: themeSlice.actions,
	router: routerSlice({ path: "" }).actions,
};

export let State = {
	actions,
	useSelection: useSelector.withTypes<RootState>(),
	useActions: () => ({
		actions,
		dispatch: useDispatch(),
	}),
};

export type RootState = ReturnType<ReturnType<typeof makeAppStore>["getState"]>;

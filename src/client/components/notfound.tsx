import { ToastContext } from "@100x/webtui-react";
import { use, useLayoutEffect } from "react";
import { State } from "../lib/state.ts";

export const NotFound = () => {
	let sendToast = use(ToastContext);
	let { actions, dispatch } = State.useActions();

	useLayoutEffect(() => {
		sendToast("Page not found");
		dispatch(actions.router.notFound());
	}, []);

	return null;
};

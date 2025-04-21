import { Box } from "@100x/webtui-react";
import { State } from "../lib/state.ts";

export default () => {
	let page = State.useSelection((x) => x.router.page);
	if (!page.Component) {
		throw new Error("No index component found");
	}
	return (
		<Box
			className={
				"flex flex-col justify-center mx-auto max-w-2xl space-y-4 p-4 text-center sm:text-left"
			}
		>
			<page.Component />
		</Box>
	);
};

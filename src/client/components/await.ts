import { type ReactNode, use } from "react";

interface AwaitProps<T> {
	promise: Promise<T>;
	children: (result: T) => ReactNode;
}

export let Await = <T>(props: AwaitProps<T>) =>
	props.children(use(props.promise));

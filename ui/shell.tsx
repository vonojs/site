import { App } from "./App";

export default function Shell(props: {
	head: any;
	scripts: any;
	path: string;
}) {
	return (
		<html>
			<head lang="en">
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{props.head}
			</head>
			<body>
				<div id="root">
					<App path={props.path} />
				</div>
				<div
					id="toasts"
					className="z-999 fixed top-4 w-full flex justify-center"
				></div>
				{props.scripts}
			</body>
		</html>
	);
}

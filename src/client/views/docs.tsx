import {
	Box,
	Button,
	Heading,
	ListItem,
	Text,
	Tooltip,
	UnorderedList,
} from "@100x/webtui-react";
import { type PropsWithChildren, useState } from "react";
import Link from "../components/link.tsx";
import { NotFound } from "../components/notfound.tsx";
import { State } from "../lib/state.ts";

let Content = (
	props: PropsWithChildren<{ title: string; section: string }>,
) => {
	return (
		<Box
			border
			contain={"!top"}
			className={"w-full grow"}
			css={{
				display: props.section === "content" ? "block" : "none",
				small: {
					display: "block",
				},
			}}
		>
			<Heading.H1
				css={{
					padding: "0 1ch",
					display: "inline-block",
					backgroundColor: "var(--background0)",
				}}
			>
				{props.title}
			</Heading.H1>
			<Box
				as={"article"}
				css={{
					padding: "1ch",
					overflowY: "scroll",
					height: "calc(100% - 2rem)",
					maxWidth: "1024px",
				}}
				className={"typography"}
			>
				{props.children}
			</Box>
		</Box>
	);
};

let Aside = (props: { section: string }) => {
	return (
		<Box
			as={"aside"}
			border
			contain={"!top"}
			className={"w-screen md:max-w-[300px]"}
			css={{
				display: props.section === "sidebar" ? "block" : "none",
				small: {
					display: "block",
				},
			}}
		>
			<Text
				as={"h2"}
				css={{
					padding: "0 1ch",
					display: "inline-block",
					backgroundColor: "var(--background0)",
				}}
			>
				Documentation
			</Text>
			<Box className={"flex flex-col space-y-4 overflow-scroll px-4 py-2"}>
				<details open={true}>
					<summary>Intro</summary>
					<UnorderedList marker={"open tree"}>
						<ListItem>
							<Link to={"/"}>index</Link>
						</ListItem>
						<ListItem>
							<Link to={"/installation"}>installation</Link>
						</ListItem>
						<ListItem>
							<Link to={"/getting-started"}>get-started</Link>
						</ListItem>
					</UnorderedList>
				</details>
				<details open={true}>
					<summary>Guide</summary>
					<UnorderedList marker={"open tree"}>
						<ListItem>
							<Link to={"/guide/the-server"}>the-server</Link>
						</ListItem>
						<ListItem>
							<Link to={"/guide/the-client"}>the-client</Link>
						</ListItem>
						<ListItem>
							<Link to={"/guide/html"}>#html</Link>
						</ListItem>
						<ListItem>
							<Link to={"/guide/manifest"}>#manifest</Link>
						</ListItem>
					</UnorderedList>
				</details>
				<details open={true}>
					<Tooltip content={"Deployment options"}>
						<summary>Deployment</summary>
					</Tooltip>
					<UnorderedList marker={"open tree"}>
						<ListItem>
							<Link to={"/deployment/node"}>node</Link>
						</ListItem>
						<ListItem>
							<Link to={"/deployment/cloudflare"}>cloudflare</Link>
						</ListItem>
						<ListItem>
							<Link to={"/deployment/netlify"}>netlify</Link>
						</ListItem>
						<ListItem>
							<Link to={"/deployment/custom"}>custom-adaptors</Link>
						</ListItem>
					</UnorderedList>
				</details>
			</Box>
		</Box>
	);
};

let Menu = (props: { setSection: (s: string) => void }) => {
	return (
		<Box className={"w-full md:hidden flex justify-stretch gap-2"}>
			<Button
				size={"small"}
				className={"w-full"}
				onClick={() => props.setSection("sidebar")}
			>
				<Tooltip content={"Show the sidebar navigation"}>
					<p>Sidebar</p>
				</Tooltip>
			</Button>
			<Button
				size={"small"}
				className={"w-full"}
				onClick={() => props.setSection("content")}
			>
				<Tooltip content={"Show the documentation"}>Docs</Tooltip>
			</Button>
		</Box>
	);
};

export default () => {
	let [section, setSection] = useState("content");

	let page = State.useSelection((x) => x.router.page);

	if (!page.Component) {
		return <NotFound to={"/"} />;
	}

	return (
		<Box className={"w-full h-full"}>
			<Box
				css={{
					display: "flex",
					width: "100%",
					height: "calc(100% - 2rem)",
					medium: {
						height: "100%",
					},
				}}
			>
				<Aside section={section} />
				<Content title={page.meta.title} section={section}>
					<page.Component />
					<Box className={"h-4"} />
				</Content>
			</Box>
			<Menu setSection={setSection} />
		</Box>
	);
};

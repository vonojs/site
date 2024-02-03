import { Component } from "preact";
import { DisplayText } from "../components/common/text";
import { ScrollOffset, animate, scroll } from "motion";

export const Home = () => (
	<>
		<Hero />
		<MakeItFullStack />
		<Hono />
		<BuildYourOwn />
	</>
);

class Hero extends Component {
	componentDidMount() {
		scroll(
			animate("#hero-background", {
				y: [0, "100%"],
			}),
			{
				target: document.getElementById("hero")!,
				offset: ScrollOffset.Exit,
			}
		);
		scroll(
			animate("#hero-title", {
				y: [0, "300px"],
				scale: [1, 0.5],
			}),
			{
				target: document.getElementById("hero")!,
				offset: ScrollOffset.Exit,
			}
		);
		scroll(
			animate("#hero-subtitle", {
				y: [0, "400px"],
				scale: [1, 0.5],
			}),
			{
				target: document.getElementById("hero")!,
				offset: ScrollOffset.Exit,
			}
		);
		scroll(
			animate("#hero-text", {
				y: [0, "500px"],
				scale: [1, 0.5],
			}),
			{
				target: document.getElementById("hero")!,
				offset: ScrollOffset.Exit,
			}
		);
		scroll(
			animate("#hero-code", {
				y: [0, "550px"],
				scale: [1, 0.5],
			}),
			{
				target: document.getElementById("hero")!,
				offset: ScrollOffset.Exit,
			}
		);
	}
	render() {
		return (
			<section
				id="hero"
				className="relative h-screen w-full bg-vite-950 flex items-center justify-center overflow-hidden"
			>
				<div className="relative z-10 dark:text-white text-vite-600 flex flex-col justify-center items-center space-y-4">
					<DisplayText
						id="hero-title"
						iter={10}
						gap={1.5}
						class="text-9xl text-center"
					>
						Vono
					</DisplayText>
					<h2 id="hero-subtitle" className="text-3xl text-center font-sans">
						The <i>anti-framework</i> framework plugin for Vite
					</h2>
					<h3 id="hero-text" className="text-xl text-center font-sans">
						Transform your{" "}
						<span className="inline-block font-display text-vite-500 dark:text-vite-200 translate-y-1">
							Vite
						</span>{" "}
						app into a <br /> full-stack framework with the power of{" "}
						<span className="inline-block font-display text-hono-500 translate-y-1">
							Hono.
						</span>
					</h3>
					<div className="pt-16" />
					<a
						href="/docs"
						id="hero-code"
						className="py-4 px-12 rounded-full inline-block backdrop-blur-sm bg-vite-300/30 dark:bg-vite-600/30 border border-vite-500 flex items-center space-x-4 hover:border-hono-400 hover:text-hono-400 transition text-vite-700 dark:text-vite-200 font-display text-md"
					>
						Get Started
					</a>
					<div className="-z-10 dark:bg-vite-900 absolute inset-0 blur-3xl opacity-70 pointer-events-none" />
				</div>
				<img
					src="/bg_light.png"
					id="hero-background"
					className="dark:hidden absolute w-full h-full object-cover"
				/>
				<img
					src="/bg_dark.png"
					id="hero-background"
					className="hidden dark:block dark:absolute w-full h-full object-cover"
				/>
				<div className="hidden dark:absolute bottom-0 inset-x-0 top-0 bg-gradient-radial from-transparent via-transparent to-vite-950 z-20 pointer-events-none"></div>
				<div className="absolute bottom-0 h-64 inset-x-0 bg-gradient-linear shape-b from-transparent dark:to-vite-950 to-vite-100 z-20 pointer-events-none" />
				<div className="absolute bottom-0 h-48 inset-x-0 bg-gradient-linear shape-b from-transparent dark:to-vite-950 to-vite-100 z-20 pointer-events-none" />
				<div className="absolute bottom-0 h-24 inset-x-0 bg-gradient-linear shape-b from-transparent dark:to-vite-950 to-vite-100 z-20 opacity-50 pointer-events-none" />
			</section>
		);
	}
}

const Hono = () => (
	<section
		className={`
		relative
		mt-32
		bg-gradient-linear
		from-hono-400
		to-hono-500
		shape-b
		border-t
		border-b
		border-t-hono-300
		border-b-hono-600
		shadow-lg
		shadow-vite-300
		dark:shadow-hono-800`}
	>
		<div className="py-8" />
		<div className="z-10 relative max-w-5xl mx-auto p-4 space-y-8">
			<h2 className="text-3xl md:text-5xl font-display dark:text-hono-950 text-hono-800 space-y-4">
				<span className="inline-block">Hono: </span>
				<span className="inline-block">Fast,</span>
				<span className="inline-block">Lightweight,</span>
				<span className="inline-block">Web-standards</span>
			</h2>
			<p className="text-xl md:text-2xl font-sans text-hono-900">
				Hono is a fast and fully featured <br /> web framework designed for the
				edge.
			</p>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
				<HonoGridItem
					title="Edge Native"
					text="Built for the edge, with modern web standards. No legacy, no lock-in."
				/>
				<HonoGridItem
					title="Batteries Included"
					text="Hono has built-in middleware, custom middleware, third-party middleware, and helpers. Batteries included."
				/>
				<HonoGridItem
					title="Delightful DX"
					text="Super clean APIs. First-class TypeScript support. Now, we've got 'Types'."
				/>
				<HonoGridItem
					title="Blazing Fast"
					text="Hono outperforms traditional node servers in a tiny 14kb bundle."
				/>
			</div>
			<img
				className="hidden lg:block absolute top-6 right-4 opacity-20"
				src="/hono-logo.png"
			/>
		</div>
		<div className="py-8" />
		<div className="absolute inset-0 dots" />
	</section>
);

const HonoGridItem = (props: { title: string; text: string }) => (
	<div className="p-4 inline-block rounded-lg shadow-inset shadow-lg bg-hono-500 shadow-hono-600/40 border border-hono-300/40">
		<h3 className="text-xl font-code">{props.title}</h3>
		<p className="mt-4">{props.text}</p>
	</div>
);

const MakeItFullStack = () => (
	<section className="relative p-4 w-full">
		<div className="py-8" />
		<div className="max-w-5xl mx-auto">
			<h2 className="text-5xl font-display text-vite-300 text-center">
				Make it{" "}
				<span className="bg-gradient-linear from-pink-300 dark:from-vite-200 shape-br to-hono-400 dark:to-hono-500 bg-clip-text text-transparent">
					Full Stack
				</span>
			</h2>
			<p className="text-2xl text-center text-vite-500 dark:text-vite-300 max-w-2xl mx-auto mt-8">
				Turn any Vite app full-stack and deploy to the{" "}
				<span className="font-code text-hono-600 dark:text-hono-300">Edge</span>{" "}
				with zero config. Combine React and HTMX, Svelte and Lua, and everything
				in-between.
				<br /> <br />
				Vono can be dropped into existing Vite projects to provide a backend
				without any opinions on how your project is structured. The developer
				has a blank canvas to work with, and the plumbing of building and
				deployment is mostly taken care of.
			</p>
		</div>
		<div p-8 />
	</section>
);

const BuildYourOwn = () => (
	<section className="relative p-4 w-full">
		<div className="py-8" />
		<div className="max-w-5xl mx-auto">
			<h2 className="text-5xl font-display text-vite-300 text-center">
				Build your own
				<br />
				<span className="bg-gradient-linear from-pink-300 dark:from-vite-200 shape-br to-hono-400 dark:to-hono-500 bg-clip-text text-transparent pt-4 inline-block">
					Framework
				</span>
			</h2>
			<p className="text-2xl text-center text-vite-500 dark:text-vite-300 max-w-2xl mx-auto mt-8">
				Using Hono as the back-end, Vono provides a base for building your own
				custom framework with the features you need and nothing more.
			</p>
			<div className="grid lg:grid-cols-2 gap-4"></div>
		</div>
		<div className="p-8" />
	</section>
);

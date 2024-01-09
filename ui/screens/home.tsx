import { scroll, animate, ScrollOffset } from "motion";
import { DisplayText } from "../components/Text";

export const Home = () => (
	<>
		<section
			id="hero"
			class="relative h-screen w-full bg-vite-950 flex items-center justify-center overflow-hidden"
		>
			<div
				class="relative z-10 dark:text-white text-vite-600 flex flex-col justify-center items-center space-y-4"
			>
				<DisplayText id="hero-title" iter={10} gap={1.5} class="text-9xl text-center">
					Vono
				</DisplayText>
				<h2 id="hero-subtitle" class="text-3xl text-center font-sans">
					The <i>anti-framework</i> framework plugin for Vite
				</h2>
				<h3 id="hero-text" class="text-xl text-center font-sans">
					Build full-stack web apps and frameworks <br /> with the full power of{" "}
					<span class="inline-block font-display text-vite-500 dark:text-vite-200 translate-y-1">
						Vite
					</span>{" "}
					and{" "}
					<span class="inline-block font-display text-hono-500 translate-y-1">
						Hono
					</span>
				</h3>
				<div class="pt-16" />
				<div id="hero-code" class="p-4 rounded-full inline-block backdrop-blur-sm bg-vite-300/30 dark:bg-vite-600/30 border border-vite-500 flex items-center space-x-4">
					<code class="text-vite-700 dark:text-vite-200 font-code">pnpm i @vonojs/vono</code>
					<div class="w-7 h-7 bg-vite-300/70 border border-vite-500 rounded-md">
						<Copy />
					</div>
				</div>
				<div class="-z-10 dark:bg-vite-900 absolute inset-0 blur-3xl opacity-70" />
			</div>
			<img
				src="/bg_light.png"
				id="hero-background"
				class="dark:hidden absolute w-full h-full object-cover"
			/>
			<img
				src="/bg_dark.png"
				id="hero-background"
				class="hidden dark:block dark:absolute w-full h-full object-cover"
			/>
			<div class="hidden dark:absolute bottom-0 inset-x-0 top-0 bg-gradient-radial from-transparent via-transparent to-vite-950 z-20"></div>
			<div class="absolute bottom-0 h-72 inset-x-0 bg-gradient-linear shape-b from-transparent dark:to-vite-950 to-vite-100 z-20" />
		</section>
		<section class="h-screen dark:bg-vite-950 bg-vite-100" />
	</>
);

const Copy = () => (
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 25 25"
		class="stroke-hono-700"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			class="stroke-vite-800"
			d="M8.94605 4.99995L13.2541 4.99995C14.173 5.00498 15.0524 5.37487 15.6986 6.02825C16.3449 6.68163 16.7051 7.56497 16.7001 8.48395V12.716C16.7051 13.6349 16.3449 14.5183 15.6986 15.1717C15.0524 15.825 14.173 16.1949 13.2541 16.2H8.94605C8.02707 16.1949 7.14773 15.825 6.50148 15.1717C5.85522 14.5183 5.495 13.6349 5.50005 12.716L5.50005 8.48495C5.49473 7.5658 5.85484 6.6822 6.50112 6.0286C7.1474 5.375 8.0269 5.00498 8.94605 4.99995Z"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M10.1671 19H14.9371C17.4857 18.9709 19.5284 16.8816 19.5001 14.333V9.666"
			class="stroke-vite-800"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

export function heroSystem() {
	if (!document.getElementById("hero")) return;
	scroll(
		animate("#hero-background", {
			y: [0, "95%"],
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


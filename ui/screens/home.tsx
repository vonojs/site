import { scroll, animate, ScrollOffset } from "motion";
import { DisplayText } from "../components/common/text";
import { Code } from "../components/common/code";

export const Home = () => (
	<>
		<Hero />
		<Overview />
		<MakeItFullStack />
		<Hono />
		<BuildYourOwn />
	</>
);

const Hero = () => (
	<section
		id="hero"
		class="relative h-screen w-full bg-vite-950 flex items-center justify-center overflow-hidden"
	>
		<div class="relative z-10 dark:text-white text-vite-600 flex flex-col justify-center items-center space-y-4">
			<DisplayText
				id="hero-title"
				iter={10}
				gap={1.5}
				class="text-9xl text-center"
			>
				Vono
			</DisplayText>
			<h2 id="hero-subtitle" class="text-3xl text-center font-sans">
				The <i>anti-framework</i> framework plugin for Vite
			</h2>
			<h3 id="hero-text" class="text-xl text-center font-sans">
				Transform your{" "}
				<span class="inline-block font-display text-vite-500 dark:text-vite-200 translate-y-1">
					Vite
				</span>{" "}
				app into a <br /> full-stack framework with the power of{" "}
				<span class="inline-block font-display text-hono-500 translate-y-1">
					Hono.
				</span>
			</h3>
			<div class="pt-16" />
			<div
				id="hero-code"
				class="p-4 rounded-full inline-block backdrop-blur-sm bg-vite-300/30 dark:bg-vite-600/30 border border-vite-500 flex items-center space-x-4"
			>
				<code class="text-vite-700 dark:text-vite-200 font-code">
					pnpm i @vonojs/vono
				</code>
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
		<div class="absolute bottom-0 h-64 inset-x-0 bg-gradient-linear shape-b from-transparent dark:to-vite-950 to-vite-100 z-20" />
		<div class="absolute bottom-0 h-48 inset-x-0 bg-gradient-linear shape-b from-transparent dark:to-vite-950 to-vite-100 z-20" />
		<div class="absolute bottom-0 h-24 inset-x-0 bg-gradient-linear shape-b from-transparent dark:to-vite-950 to-vite-100 z-20 opacity-50" />
	</section>
);

const step1code = `import { defineConfig } from 'vite'
import cloudflare from '@vonojs/vono/adaptors'
import vono from '@vonojs/vono'
			
export default defineConfig({
	plugins: [vono({ adaptor: cloudflare() })]
})`;

const step2code = `import { Hono } from 'Hono'

const app = new Hono()
			
app.get('/', c => c.text('Hello World!'))

export default app`;

const step3code = `import rpc from '#vono/rpc'

document.getElementById('ping-btn')
.addEventListener('click', async () => {
	const res = await rpc.ping.$get().then(res => res.text())
	console.log(res)
})`;

const Overview = () => (
	<section space-y-16 p-4>
		<div mx-auto space-y-4>
			<h2 text-5xl text-vite-700 dark:text-vite-100 text-center font-display>
				Step 1
			</h2>
			<p text-center text-vite-500 dark:text-vite-300>
				Install and add to your vite config
			</p>
			<Code title="vite.config.ts">{step1code}</Code>
		</div>
		<div mx-auto space-y-4>
			<h2 text-5xl text-vite-700 dark:text-vite-100 text-center font-display>
				Step 2
			</h2>
			<p text-center text-vite-500 dark:text-vite-300>
				create a Hono app
			</p>
			<Code title="./server/index.ts">{step2code}</Code>
		</div>
		<div mx-auto space-y-4>
			<h2 text-5xl text-vite-700 dark:text-vite-100 text-center font-display>
				Step 3
			</h2>
			<p text-center text-vite-500 dark:text-vite-300>
				use Hono anywhere
			</p>
			<Code title=".src/App.tsx">{step3code}</Code>
		</div>
		{/* <p text-vite-700 dark:text-vite-100 text-center max-w-3xl mx-auto text-2xl>
			Vono lets you drop in a Hono server to any Vite app and deploy to
			Cloudflare, Netlify, Vercel, Deno, Bun, and more.
		</p> */}
	</section>
);
/*
	Build your own focused framework
	- only does what you need and nothing more
	- significantly decrease the complexity
	- full control over everything

	Make an existing Vite app Full Stack
	- as much or as little server as you want
	- streaming SSR and prerendering, or just use it to handle api routes
	- non opinionated, works for you, not against you
	- zero bloat, zero legacy, zero lock-in

	Hono
	- Edge Native
	- built for the modern web
	- ultra-lightweight yet batteries included
*/

const Hono = () => (
	<section
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
		shadow-hono-800
	>
		<div py-8 />
		<div z-10 relative max-w-5xl mx-auto p-4 space-y-8>
			<h2 text-3xl md="text-5xl" font-display text-hono-950 space-y-4>
				<span inline-block>Hono: </span>
				<span inline-block>Fast,</span>
				<span inline-block>Lightweight,</span>
				<span inline-block>Web-standards</span>
			</h2>
			<p text-xl md:text-2xl font-sans text-hono-900>
				Hono is a fast and fully featured <br /> web framework designed for the
				edge.
			</p>
			<div grid md:grid-cols-2 lg:grid-cols-4 gap-4>
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
				hidden
				lg="block"
				absolute
				top-6
				right-4
				opacity-20
				src="/hono-logo.png"
			/>
		</div>
		<div py-8 />
		<div class="absolute inset-0 dots" />
	</section>
);

const HonoGridItem = (props: { title: string; text: string }) => (
	<div
		p-4
		inline-block
		rounded-lg
		shadow-inset
		shadow-lg
		bg-hono-500
		shadow-hono="600/40"
		border
		border-hono="300/40"
	>
		<h3 text-xl font-code>
			{props.title}
		</h3>
		<p mt-4>{props.text}</p>
	</div>
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

const MakeItFullStack = () => (
	<section relative p-4 w-full>
		<div py-8 />
		<div max-w-5xl mx-auto>
			<h2 text-5xl font-display text-vite-300 text-center>
				Make it{" "}
				<span
					bg-gradient-linear
					from-vite-200
					shape-br
					to-hono-400
					bg-clip-text
					text-transparent
				>
					Full Stack
				</span>
			</h2>
			<p
				text-2xl
				text-center
				text-vite-500
				dark:text-vite-300
				max-w-2xl
				mx-auto
				mt-8
			>
				Turn any Vite app full-stack and deploy to the{" "}
				<span font-code text-hono-600 dark:text-hono-300>
					Edge
				</span>{" "}
				with zero config. Combine React and HTMX, Svelte and Lua, and everything
				in-between.
			</p>
			<div grid lg:grid-cols-2 gap-4>
				
			</div>
		</div>
		<div p-8 />
	</section>
);

const BuildYourOwn = () => (
	<section relative p-4 w-full>
		<div py-8 />
		<div max-w-5xl mx-auto>
			<h2 text-5xl font-display text-vite-300 text-center>
				Build your own focused framework
			</h2>
			<p text-lg text-center text-vite-500 dark:text-vite-300>
				Build just what you need, without the complexity.
			</p>
			<div grid></div>
		</div>
		<div p-8 />
	</section>
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

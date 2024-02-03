import { DisplayText } from "./text";

const NavLink = ({ href, children }: { href: string; children: any }) => (
	<a
		className={`text-vite-100
		hover:text-pink-300
		active:text-pink-400
		transition
		duration-150
		rounded-md
		font-code`}
		href={href}
	>
		{children}
	</a>
);

export const Navigation = () => (
	<header
		className={`fixed
		inset-x-12
		mt-2
		rounded-full
		py-2
		px-4
		flex
		items-center
		justify-between
		overflow-clip
		text-vite-100
		dark:text-vite-50
		z-99
		border
		border-vite-500`}
	>
		<ul className="flex items-center justify-center space-x-4">
			<li>
				<a target="_blank" href="https://github.com/vonojs/vono">
					<Github />
				</a>
			</li>
			<li>
				<button className="flex items-center justify-center">
					<Sun />
				</button>
			</li>
		</ul>

		<div className="absolute inset-0 flex items-center justify-center -z-10">
			<a href="/" z-20>
				<DisplayText iter={10} gap={1} class="text-3xl">
					VONO
				</DisplayText>
			</a>
		</div>

		<button id="nav-toggle" className="block lg:hidden">
			<Hamburger />
		</button>

		<div className="items-center justify-between py-2 p2-4 hidden lg:flex">
			<ul className="flex items-center space-x-4 font-sans">
				<li>
					<NavLink href="/docs">Quickstart</NavLink>
				</li>
				<li>
					<NavLink href="/docs">Docs</NavLink>
				</li>
				<li>
					<NavLink href="/docs">Philosophy</NavLink>
				</li>
			</ul>
		</div>

		<div
			className={`
			absolute
			-z-20
			inset-0
			backdrop-blur-sm
			bg-vite-300/30
			dark:bg-vite-600/30`}
		/>
	</header>
);

const Github = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 96 94"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
			className="fill-vite-800 dark:fill-vite-300"
		/>
	</svg>
);

const Sun = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="-5.5 0 32 32"
		version="1.1"
		className="w-8 h-8 fill-vite-200"
	>
		<title>light</title>
		<path d="M11.875 6v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.813 0.375-1.219 1.156-1.219s1.156 0.406 1.156 1.219zM14.219 9.25l1.438-2.031c0.469-0.625 1.063-0.75 1.656-0.313s0.656 1 0.188 1.688l-1.438 2c-0.469 0.688-1.031 0.75-1.656 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM5.781 7.25l1.469 2c0.469 0.688 0.406 1.219-0.219 1.656-0.594 0.469-1.156 0.375-1.625-0.313l-1.469-2c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.469 1.156-0.375 1.625 0.313zM10.719 11.125c2.688 0 4.875 2.188 4.875 4.875 0 2.656-2.188 4.813-4.875 4.813s-4.875-2.156-4.875-4.813c0-2.688 2.188-4.875 4.875-4.875zM1.594 11.813l2.375 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.75 0.969-1.563 0.719l-2.313-0.75c-0.781-0.25-1.063-0.75-0.844-1.5 0.25-0.719 0.75-0.938 1.531-0.688zM17.5 12.563l2.344-0.75c0.813-0.25 1.313-0.031 1.531 0.688 0.25 0.75-0.031 1.25-0.844 1.469l-2.313 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.031-1.219 0.813-1.469zM10.719 18.688c1.5 0 2.719-1.219 2.719-2.688 0-1.5-1.219-2.719-2.719-2.719s-2.688 1.219-2.688 2.719c0 1.469 1.188 2.688 2.688 2.688zM0.906 17.969l2.344-0.75c0.781-0.25 1.313-0.063 1.531 0.688 0.25 0.75-0.031 1.219-0.813 1.469l-2.375 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.063-1.219 0.844-1.469zM18.219 17.219l2.344 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.719 0.969-1.531 0.719l-2.344-0.781c-0.813-0.25-1.031-0.719-0.813-1.469 0.25-0.75 0.75-0.938 1.531-0.688zM3.938 23.344l1.469-1.969c0.469-0.688 1.031-0.781 1.625-0.313 0.625 0.438 0.688 0.969 0.219 1.656l-1.469 1.969c-0.469 0.688-1.031 0.813-1.656 0.375-0.594-0.438-0.656-1.031-0.188-1.719zM16.063 21.375l1.438 1.969c0.469 0.688 0.406 1.281-0.188 1.719s-1.188 0.281-1.656-0.344l-1.438-2c-0.469-0.688-0.406-1.219 0.188-1.656 0.625-0.438 1.188-0.375 1.656 0.313zM11.875 23.469v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.844 0.375-1.25 1.156-1.25s1.156 0.406 1.156 1.25z" />
	</svg>
);

const Hamburger = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className='stroke-vite-200 w-10 h-10'  
		viewBox="0 0 24 24"
	>
		<path
			d="M4 6H20M4 12H14M4 18H9"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

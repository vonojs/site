import { DisplayText } from "./Text";

export const Navigation = () => (
	<header class="fixed inset-x-12 mt-2 rounded-full py-2 px-4 flex items-center justify-center overflow-clip text-vite-100 dark:text-vite-50 z-99 border border-vite-500">
		<a href="/" class="z-20">
			<DisplayText iter={10} gap={1} class="text-3xl">
				VONO
			</DisplayText>
		</a>

		<div class="absolute inset-0 flex items-center justify-between py-2 px-4">
			<div>
				<Search class="absolute top-1/2 -translate-y-1/2 left-6" />
				<input class="peer w-full max-w-200px bg-vite-200/20 dark:bg-vite-600/20 border border-vite-600 dark:border-vite-400 rounded-full p-1 px-2 pl-8 opacity-20 hover:opacity-50 transition focus:opacity-100 outline-none" />
			</div>
			<ul class="flex items-center space-x-4 font-sans">
				<li>
					<a class="hover:text-vite-200 active:text-vite-300 transition duration-150" href="/docs">docs</a>
				</li>
				{/* <div class="text-hono-500">·</div> */}
				<li>
					<a class="hover:text-vite-200 active:text-vite-300 transition duration-150" href="/philosophy">philosophy</a>
				</li>
				{/* <div class="text-hono-500">·</div> */}
				<li>
					<a target="_blank" href="https://github.com/vonojs">
						<Github />
					</a>
				</li>
			</ul>
		</div>
		<div class="absolute -z-10 inset-0 backdrop-blur-sm bg-vite-300/30 dark:bg-vite-600/30" />
	</header>
);

const Search = (props: any) => (
	<figure class={props.class}>
		<svg
			width="24px"
			height="24px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
				class="stroke-vite-800 dark:stroke-vite-300"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</figure>
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
			class="fill-vite-800 dark:fill-vite-300"
		/>
	</svg>
);

import hljs from "highlight.js";

export function Code(props: { children: string; title?: string }) {
	const code = hljs.highlight(props.children, {
		language: "typescript",
	}).value;
	if (!props.children.includes("\n"))
		return (
			<code
				font-code
				rounded-md
				bg-vite-200
				dark:bg-vite-900
				border
				border-vite-300
				dark:border-vite-800
				text-inherit
			>
				{props.children}
			</code>
		);
	return (
		<div
			max-w-2xl
			mx-auto
			bg="vite-900"
			relative
			w-full
			p-4
			rounded-lg
			min-h-100px
			border
			border-vite-600
		>
			<div flex items-center space-x-2>
				<div w-4 h-4 bg="vite-500" rounded-full />
				<div w-4 h-4 bg="vite-500" rounded-full />
				<div w-4 h-4 bg="vite-500" rounded-full />
			</div>
			<div
				hidden
				sm:flex
				absolute
				top-2
				inset-x-0
				justify-center
				items-center
				font-code
				text="vite-400"
			>
				<div>{props.title}</div>
			</div>
			<button absolute right-2 top-2 w-8 h-8>
				<Copy />
			</button>
			<div w-full mt-6 text-vite-200 overflow-x-scroll overflow-hidden>
				<code>
					<pre pb-5 dangerouslySetInnerHTML={{ __html: code }} />
				</code>
			</div>
		</div>
	);
}

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
			class="stroke-vite-500"
			d="M8.94605 4.99995L13.2541 4.99995C14.173 5.00498 15.0524 5.37487 15.6986 6.02825C16.3449 6.68163 16.7051 7.56497 16.7001 8.48395V12.716C16.7051 13.6349 16.3449 14.5183 15.6986 15.1717C15.0524 15.825 14.173 16.1949 13.2541 16.2H8.94605C8.02707 16.1949 7.14773 15.825 6.50148 15.1717C5.85522 14.5183 5.495 13.6349 5.50005 12.716L5.50005 8.48495C5.49473 7.5658 5.85484 6.6822 6.50112 6.0286C7.1474 5.375 8.0269 5.00498 8.94605 4.99995Z"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M10.1671 19H14.9371C17.4857 18.9709 19.5284 16.8816 19.5001 14.333V9.666"
			class="stroke-vite-500"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

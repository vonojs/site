export function DisplayText(props: {
	children: string;
	size?: number;
	class?: string;
	iter?: number;
	gap?: number;
	id?: string;
}) {
	return (
		<div id={props.id} class="relative">
			<h1
				class={` bg-gradient-linear shape-bl dark:from-vite-300 from-vite-500 dark:to-vite-300 to-vite-500 bg-clip-text text-transparent font-display ${props.class}`}
			>
				Vono
			</h1>
			{[...Array(props.iter ?? 10)].map((_, i) => (
				<h1
					class={`absolute inset-0 font-display bg-clip-text! text-transparent ${props.class}`}
					style={{
						transform: `translate(${i * (props.gap ?? 1)}px, 0rem)`,
						background: `linear-gradient(90deg, hsl(${
							3 * i + 220
						}, 100%, 70%), hsl(${-3 * i + 60}, 100%, 50%));`,
					}}
				>
					Vono
				</h1>
			))}
		</div>
	);
}

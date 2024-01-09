export default function Styles(props: { children: string }) {
	return (
		<style
			dangerouslySetInnerHTML={{
				__html: props.children,
			}}
		/>
	);
}

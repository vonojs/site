import { Router, Route } from "@solidjs/router";
import { createSignal } from "solid-js";

function Layout(props: { children?: any }) {
	const [count, setCount] = createSignal(0);
	return (
		<div>
			<nav>
				<ul>
					<li>
						<a href="/">home</a>
					</li>
					<li>
						<a href="/about">about</a>
					</li>
				</ul>
			</nav>
			<main>{props.children}</main>
			<footer>
				<button onClick={() => setCount(count() + 1)}>count: {count()}</button>
			</footer>
		</div>
	);
}

function App(props: { pathname?: string }) {
	return (
		<Router root={Layout} url={props.pathname ?? ""}>
			<Route path="/" component={() => <div>home</div>} />
			<Route path="/about" component={() => <div>about</div>} />
		</Router>
	);
}

export default App;

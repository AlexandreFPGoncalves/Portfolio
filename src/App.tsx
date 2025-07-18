import { Router, Route } from '@solidjs/router';
import { Routes } from './routes';

export default function App() {
	const { Home } = Routes;

	return (
		<Router>
			<Route path="/" component={Home} />
		</Router>
	);
}

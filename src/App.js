import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from 'react-router-dom';

import BattlePage from './components/Battle/Page';

const BattleRoute = () => {
	const { battle_id } = useParams();

	return <BattlePage battle_id={battle_id} />;
};

const MainRoute = () => {
	return <div>Main</div>;
};

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/battle/:battle_id" component={BattleRoute} />
				<Route path="/" component={MainRoute} />
			</Switch>
		</Router>
	);
}

export default App;

import React from 'react';
import { 
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import App from './App';

export default function BasicExample(props: any) {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/:id">
						<App/>
					</Route>
					<Route path="/">
						<App {...props}/>
					</Route>
				</Switch>
			</div>
		</Router>
	)
}
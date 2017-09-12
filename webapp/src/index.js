import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

/* MATERIAL UI */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

/* ICONS */
import FontIcon from 'material-ui/FontIcon';

import reducers from './reducers';

import Series from './containers/series';
import Movies  from './containers/movies';
import Splash from './containers/splash';

import { buttonFactory } from './components/button'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
	handleTouchTap() {console.log('handleTouchTap')} //TODO: Redirect to /
	login() { console.log('login') }
	freeTrial() { console.log('Free Trial') }

	renderLoginButton() {
		return ( buttonFactory('FlatButton', 'Login', () => this.login.bind(this)) )
	}

	renderFreeTrialButton() {
		return ( buttonFactory('FlatButton', 'Start Free Trial', () => this.freeTrial.bind(this)) )
	}

	renderButtons() {
		return ( <div> { this.renderLoginButton() }{ this.renderFreeTrialButton() } </div> )
	}


	render() { 
		return (
			<BrowserRouter>
				<div>
					<AppBar title="Demo Streaming" iconElementLeft={(<div />)} iconElementRight={ this.renderButtons() } onLeftIconButtonTouchTap={this.toggleBurgerBar} onTitleTouchTap={ this.handleTouchTap }  />

					<Switch>
						<Route path="/movies" component={Movies}></Route>
						<Route path="/series" component={Series}></Route>
						<Route path="/" component={Splash}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
	</Provider>, 
	document.querySelector('.container-fluid')
);


// 

import React, { Component } from 'react';
import * as header from 'redux/modules/base/header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import { default as Header } from 'components/Base/Header';
import {default as MainRoute } from 'containers/routes/MainRoute';
import {default as Profile } from 'containers/routes/Profile';

class App extends Component {
	state = {
		value : 0
	}
	componentDidMount(){
		const { HeaderActions } = this.props;
		HeaderActions.example(false);
	}
	render() {
		const { children } = this.props;
		return (
			<Router>
				<div>
					<Header />
					<Route path="/main" component={MainRoute}/>
					<Route path="/profile" component={Profile}/>
					{children}
				</div>
			</Router>
		);
	}
}

export default connect(
	state => ({
		status: {
			something: state.base.header.get('something')
		}
	}),
	dispatch => ({
		HeaderActions: bindActionCreators(header, dispatch) 
	})
)(App);

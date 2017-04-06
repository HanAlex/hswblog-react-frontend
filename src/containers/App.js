import React, { Component } from 'react';
import * as header from 'redux/modules/base/header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
			<div>
				<h1>한글 적기 테스트한글 테스트한글 적기 테스트</h1>
				<h1>{this.state.value}</h1>
				{children}
				<button onClick={() => this.setState({value : this.state.value+1})  }>증가</button>
			</div>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modal from 'redux/modules/base/modal';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import { default as Header } from 'components/Base/Header';
import {default as MainRoute } from 'containers/routes/MainRoute';
import {default as Profile } from 'containers/routes/Profile';
import LoginModal from 'components/Login/LoginModal';
import auth from 'redux/modules/base/auth';

class App extends Component {

	componentDidMount() {
		auth.authStateChanged(
			(firebaseUser) =>{
				if(firebaseUser){
					console.log("로그인완료", firebaseUser);
				}else{
					console.log("로그인 안됨");
				}
			}
		)
	}
	
	handleLoginModal = (() =>{
		const {ModalActions} = this.props;
		return{
			open: ()=>{
				ModalActions.openModal({modalName: 'login'});
			},
			close: () => {
				ModalActions.closeModal('login');
			}
		}
	})()

	render() {
		const { children, status:{modal} } = this.props;
		const { handleLoginModal } = this;
		return (
			<Router>
				<div>
					<Header onClick={handleLoginModal.open} />
                	<LoginModal visible={modal.getIn(['login', 'open'])}  onHide={handleLoginModal.close} />
					<Route exact path="/" component={MainRoute}/>
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
			modal: state.base.modal
		}
	}),
	dispatch => ({
		ModalActions: bindActionCreators(modal, dispatch) 
	})
)(App);

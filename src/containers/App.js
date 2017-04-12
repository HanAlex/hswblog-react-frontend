import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modal from 'redux/modules/base/modal';
import * as header from 'redux/modules/base/header';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import { default as Header } from 'components/Base/Header';
import {default as MainRoute } from 'containers/routes/MainRoute';
import {default as Profile } from 'containers/routes/Profile';
import LoginModal from 'components/Login/LoginModal';
import {default as auth } from 'helpers/auth/auth';

class App extends Component {

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

	handleHeaderMenu = (() =>{
		const {HeaderActions} = this.props;
		return{
			open: ()=>{
				HeaderActions.openUserMenu({actionName: 'userMenu'});
			},
			close: () => {
				HeaderActions.closeUserMenu('userMenu');
			}
		}
	})()

	MemeberController = (() =>{
		return{
			logout: (cb)=>{
                auth.logout(cb);
			}
		}
	})()

	render() {
		const { children, status:{modal,header} } = this.props;
		const { handleLoginModal, MemeberController, handleHeaderMenu } = this;
		return (
			<Router>
				<div>
                	<LoginModal visible={modal.getIn(['login', 'open'])} onHide={handleLoginModal.close} />
					<Header 
						visible={header.getIn(['userMenu', 'open'])} // header Menu 열/닫기
						onClick={handleLoginModal.open} // 로그인 창 열기
						userMenuEvent={handleHeaderMenu} 
						logoutEvent={MemeberController.logout} 
					/>
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
			modal: state.base.modal,
			header: state.base.header
		}
	}),
	dispatch => ({
		ModalActions: bindActionCreators(modal, dispatch),
		HeaderActions: bindActionCreators(header, dispatch) 
	})
)(App);

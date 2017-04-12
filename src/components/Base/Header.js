import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import {default as auth } from 'helpers/auth/auth';

import EyeCatchy from 'components/Common/EyeCatchy';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {userInfo: ''};
    }
    componentDidMount() {
        auth.authStateChanged(
			(firebaseUser) =>{
				if(firebaseUser){
                    this.setState({
                        userInfo: firebaseUser
                    });
				}else{
					//console.log("로그인 안됨");
				}
			}
		)
    }

    handleAuthLogout = (provider) =>{
        this.props.logoutEvent(function(){
            alert("로그아웃 되었습니다.");
        });
        this.setState({
            userInfo: ''
        });
    }

    render() {
        const {handleAuthLogout} = this;
        const {onClick, userMenuEvent, visible} = this.props;
        return (
            <div>
                <div className="header-warper"> 
                    <div className="header">    
                        <div className="sidebar-button"><Icon name="sidebar" /></div>
                        <div className="logo">Test Site</div>
                        <UserInfoArea visible={visible} userMenuEvent={userMenuEvent} logoutEvent={handleAuthLogout} onClick={onClick} userInfo={this.state.userInfo} />
                    </div>
                </div>
                <div className="header-spacer"></div>
            </div>
        );
    }

}

//
const UserInfoArea = ({onClick, userInfo, logoutEvent, userMenuEvent, visible}) => {
    if (userInfo) {
        return (
            <div className="user-info-area">
                <div className="photo-area" onClick={userMenuEvent.open}><img src={userInfo.photoURL}/></div>
                <UserLoginStatus logoutEvent={logoutEvent} userMenuEvent={userMenuEvent} visible={visible}/>
            </div>
        );
    }else{
        return (
            <div className="login-btn-area" onClick={onClick} ><div className="auth-button"><Icon name="user" />로그인</div></div>
        );
    }
};

class UserLoginStatus extends Component {
    render(){
        const {logoutEvent, userMenuEvent, visible} = this.props;
        if(!visible) return null;
        return (
            <EyeCatchy onHide={userMenuEvent.close} >
            <div className="user-menu-area">
                    <div className="menu-list">
                        <div className="menu-item" onClick={logoutEvent}><Icon name="sign out" />로그아웃</div>
                    </div>
                </div>
            </EyeCatchy>
        );
    }
    
}

export default Header;
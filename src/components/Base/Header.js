import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import {default as auth } from 'helpers/auth/auth';

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
        const {onClick} = this.props;
        return (
            <div>
                <div className="header-warper"> 
                    <div className="header">    
                        <div className="sidebar-button"><Icon name="sidebar" /></div>
                        <div className="logo">Test Site</div>
                        <UserInfoArea  logoutEvent={handleAuthLogout} onClick={onClick} userInfo={this.state.userInfo} />
                    </div>
                </div>
                <div className="header-spacer"></div>
            </div>
        );
    }

}

//
const UserInfoArea = ({onClick, userInfo,logoutEvent}) => {
    if (userInfo) {
        return (
            <div className="user-info-area">
                <div className="photo-area"><img src={userInfo.photoURL}/></div>
                <div className="user-menu-area">
                    <div className="menu-list">
                        <div className="menu-item" onClick={logoutEvent}>로그아웃</div>
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div className="login-btn-area" onClick={onClick} ><div className="auth-button"><Icon name="user" />로그인</div></div>
        );
    }
};

export default Header;
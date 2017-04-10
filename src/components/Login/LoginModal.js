import React from 'react'
import Dimmer from 'components/Common/Dimmer';
import { Icon } from 'semantic-ui-react'

const LoginModal = () => (
    <div>
        <div className="login-modal-wrapper">
            <div className="login-modal">
                <div className="login-header"><Icon name='user' size='large' />로그인</div>
                <div className="login-body">
                    <SocialLoginButton type="github" />
                    <SocialLoginButton type="google" />
                    <SocialLoginButton type="facebook" />
                </div>
            </div>
        </div>
        <Dimmer />
    </div>
);



const SocialLoginButton = ({type}) =>{
    const text = {
        github: 'Github',
        google: 'Google',
        facebook: 'Facebook'
    };

    const icon = {
        github: 'github square',
        google: 'google square',
        facebook: 'facebook square'
    }

    return (
        <div className={`social-login-button ${type}`}><Icon size="big" name={`${icon[type]}`} /><b>{text[type]}</b> 계정으로 로그인 </div>
    );
};
export default LoginModal

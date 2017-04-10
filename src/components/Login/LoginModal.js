import React,{Component} from 'react'
import Dimmer from 'components/Common/Dimmer';
import EyeCatchy from 'components/Common/EyeCatchy';
import { Icon } from 'semantic-ui-react'

class LoginModal extends Component{
    state = {
        closing : false
    }
    componentDidUpdate(preProps, nextState) {
        if(preProps.visible && !this.props.visible){
            this.setState({
                closing: true
            });
            setTimeout(
            () => {
                this.setState({closing:false});
            }    
            , 500);
        }
    }

    render(){
        const {visible, onHide} = this.props;
        const {closing} = this.state;
        if(!closing && !visible) return null;
        const animaition = visible ? 'fadeInDown' : 'bounceOutDown';
        return(
            <div>
                <div className="login-modal-wrapper">
                    <EyeCatchy  onHide={onHide} >
                        <div className={`login-modal ${animaition}`}>
                            <div className="cancel-btn" onClick={onHide}><Icon size="big" name="cancel" /></div>
                            <div className="login-header"><Icon name='user' size='large' />로그인</div>
                            <div className="login-body">
                                <SocialLoginButton type="google" />
                                <SocialLoginButton type="facebook" />
                                <SocialLoginButton type="github" />
                            </div>
                        </div>
                    </EyeCatchy>
                </div>
                <Dimmer />
            </div>
        )
    }
    
}



const SocialLoginButton = ({type}) =>{
    const text = {
        github: 'Github',
        google: 'Google',
        facebook: 'Facebook'
    };

    const icon = {
        github: 'github square',
        google: 'google',
        facebook: 'facebook square'
    }

    return (
        <div className={`social-login-button ${type}`}><Icon size="big" name={`${icon[type]}`} /><b>{text[type]}</b> 계정으로 로그인 </div>
    );
};
export default LoginModal

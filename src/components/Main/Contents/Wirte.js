import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';
import Dimmer from 'components/Common/Dimmer';


class Wirte extends Component {
    constructor(props) {
        super(props);
        this.wirteOpenMode = this.wirteOpenMode.bind(this);
        this.wirteCloseMode = this.wirteCloseMode.bind(this);
        this.state = {wirteMode: false};
    }
    wirteOpenMode(){
        this.setState({wirteMode: true});
    }
    wirteCloseMode(){
        this.setState({wirteMode: false});
    }
    render() {
        const wirteMode = this.state.wirteMode;
        const modeType = wirteMode ? 'wirteMode' : '';
        return (
            <div>
                <div className={`write-area ${modeType}`}>
                    <div className="write-header">
                        <div className="btn-area">
                        <a className="write-btn" onClick={this.wirteOpenMode} ><Icon name="write" /><span>Writing</span></a>
                        </div>
                        <div className="cancel-area" onClick={this.wirteCloseMode}>
                            <Icon className="cancel-btn" name="cancel" />
                        </div>
                    </div>
                    <div className="write-content" >
                        <div className="title-input" onClick={this.wirteOpenMode}>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Post Title" ></input>
                            </div>
                        </div>
                        <p className="desctiption">Writing area</p>
                    </div>
                </div>
                <Dimmer viewFlag={wirteMode} onClick={this.wirteCloseMode}/>
            </div>
        );
    }
}

export default Wirte;
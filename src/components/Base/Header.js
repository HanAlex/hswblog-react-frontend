import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';


const Header = () => {
    return (
        <div>
            <div className="header-warper"> 
                <div className="header">
                    <div className="sidebar-button"><Icon name="sidebar" /></div>
                    <div className="logo">blog</div>
                    {/*<Link to="main">메인</Link>
                    <Link to="profile">프로필</Link>*/}
                </div>
            </div>
            <div className="header-spacer"></div>
        </div>
    );
};

export default Header;
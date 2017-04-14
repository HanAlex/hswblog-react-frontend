import React from 'react';
import {Icon} from 'semantic-ui-react';

const MainContent = () => {
    return (
        <div className="center-area">
            <div className="write-area">
                <div className="write-header">
                    <div className="btn-area">
                    <a className="write-btn"><Icon name="write" /><span>글쓰기</span></a>
                    </div>
                </div>
                <div className="write-content">
                    <p className="desctiption">글쓰기 영역</p>
                </div>
            </div>
            <div className="content-area">
                <div className="content-item"></div>
            </div>
        </div>
    );
};

export default MainContent;
 import React, { Component } from 'react';
 import LeftArea from 'components/Main/LeftArea'
 import RightArea from 'components/Main/RightArea'
 import MainContent from 'components/Main/MainContent'
 class MainRoute extends Component {
     render() {
         return (
             <div className="main-warpper">
                <LeftArea />
                <MainContent />
                <RightArea />
             </div>
         );
     }
 }
 
 export default MainRoute;
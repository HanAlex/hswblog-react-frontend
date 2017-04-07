import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Routes = () => ( 
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route exact path="main" getComponent={MainRoute}/>
            <Route path="profile" getComponent={Profile}/>
        </div>
    </Router>
);

export default Routes;
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import App from './App';
import { MainRoute } from 'containers/routes/index';

const Routes = () => ( 
    <Router>
        <div>
            <ul>
                <li><Link to="/">App</Link></li>
                <li><Link to="/home">home</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={App} />
            <Route path="/home" component={MainRoute}/>
        </div>
    </Router>
);

export default Routes;
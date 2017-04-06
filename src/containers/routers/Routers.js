import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './routers/App';

const Routers = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App} />
    </Router>
)
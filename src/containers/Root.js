import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import Routes from './Routes';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
};

Root.prototype = {
    store: PropTypes.object,
    history: PropTypes.object
}

export default Root;
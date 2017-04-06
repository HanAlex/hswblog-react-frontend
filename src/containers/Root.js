import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from 'containers/App';

const Root = ({store, history}) => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

Root.prototype = {
    store: PropTypes.object,
    history: PropTypes.object
}

export default Root;
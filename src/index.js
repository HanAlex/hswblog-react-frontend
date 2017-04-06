import React from 'react';
import ReactDOM from 'react-dom';

//firebase
import firebase from 'firebase';
import firebaseConfig from '../config/firebase';

//react-hot-loader
import Root from 'containers/Root';
import { AppContainer } from 'react-hot-loader';

// redux
import configureStore from 'redux/configureStore';

firebase.initializeApp(firebaseConfig);

const store = configureStore( );
const rootElement = document.getElementById('root');
ReactDOM.render(
	(
		<AppContainer>
			<Root store={store} />
		</AppContainer>
	), rootElement
);


//react-hot-loader
if(module.hot){
	module.hot.accept('./containers/Root', () =>{
		const NextRoot = require('./containers/Root').default;
		ReactDOM.render(
			<AppContainer>
				<NextRoot store={store} />
			</AppContainer>, rootElement
		);
	});
}
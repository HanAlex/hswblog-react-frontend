import React, { Component } from 'react';
import firebase from 'firebase';

class App extends Component {
	state = {
		value: 0
	}
	componentDidMount(){
		// const db = firebase.database();
		// const refObj = db.ref().child('react');    
		// refObj.on('value', snap=>{
		// 	this.setState({
		// 		value: snap.val()
		// 	});
		// 	//obj.innerText = JSON.stringify(snap.val(), null);
		// });

		//실시간 로그인 상태 변화 감지

		firebase.auth().onAuthStateChanged(firebaseUser =>{
			if(firebaseUser){
				console.log('로그인 상태 ', firebaseUser);
			}else{
				console.log('로그아웃상태');
			}
		})
	}
	handleLogin = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/plus.login');
		// if(props.isType == "google"){
		// 	const provider = new firebase.auth.GoogleAuthProvider();
		// 	provider.addScope('https://www.googleapis.com/auth/plus.login');
		// }else if(props.isType == "git"){
		// 	const provider = new firebase.auth.GithubAuthProvider();
		// 	provider.addScope('repo');
		// }else if(props.isType == "facebook"){

		// }
		provider.setCustomParameters({
			'login_hint': 'user@example.com'
		});
		firebase.auth().signInWithPopup(provider).then(
			result => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const token = result.credential.accessToken;
				// The signed-in user info.
				const user = result.user; 
			}
		).catch(
			error => {
				console.log(error);
				const { code, message, email, credential} = error;
				console.log(code, message, email, credential);
			}
		)
	}
	render() {
		const { value } = this.state;
		const { handleLogin } = this;
		return (
			<div className="App">
				<h1>{value}</h1>
				<button onClick={handleLogin}>
					구글 로그인
				</button>
			</div>
		);
	}
}

export default App;

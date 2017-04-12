//firebase
import firebase from 'firebase';
import * as modal from 'redux/modules/base/modal';
import firebaseConfig from '../../../config/firebase';

firebase.initializeApp(firebaseConfig);

const loginCallBack = (function(result){
    // This gives you a Facebook Access Token.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
});
const auth = (function(){
    return{
        google: () => {
            const provider = new firebase.auth.GoogleAuthProvider();
		    provider.addScope('https://www.googleapis.com/auth/plus.login');
            provider.setCustomParameters({
			    'login_hint': 'user@example.com'
            });
            return firebase.auth().signInWithPopup(provider).then(loginCallBack);
        },
        facebook: () => {
            var provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope('user_birthday,public_profile,user_photos,email');
            provider.setCustomParameters({
			    'login_hint': 'user@example.com'
            });
            return firebase.auth().signInWithPopup(provider).then(loginCallBack);
        },
        github: () => {
            const provider = new firebase.auth.GithubAuthProvider();
			provider.addScope('repo');
            provider.setCustomParameters({
			    'login_hint': 'user@example.com'
            });
            return firebase.auth().signInWithPopup(provider).then(loginCallBack);
        },
        logout: () => {
            return firebase.auth().signOut();
        },
        authStateChanged: (cb) => {
            firebase.auth().onAuthStateChanged(cb);
        }
    }
})();

export default auth;
//firebase
import firebase from 'firebase';
import firebaseConfig from '../../../../config/firebase';

firebase.initializeApp(firebaseConfig);

const auth = (function(){
    return{
        google: () => {
            const provider = new firebase.auth.GoogleAuthProvider();
		    provider.addScope('https://www.googleapis.com/auth/plus.login');
            provider.setCustomParameters({
			    'login_hint': 'user@example.com'
            });
            return firebase.auth().signInWithPopup(provider);
        },
        facebook: () => {
            const provider = new firebase.auth.GoogleAuthProvider();
			provider.addScope('https://www.googleapis.com/auth/plus.login');
            provider.setCustomParameters({
			    'login_hint': 'user@example.com'
            });
            return firebase.auth().signInWithPopup(provider);
        },
        github: () => {
            const provider = new firebase.auth.GithubAuthProvider();
			provider.addScope('repo');
            provider.setCustomParameters({
			    'login_hint': 'user@example.com'
            });
            return firebase.auth().signInWithPopup(provider);
        },
        logout: () => {
            return firebase.auth().signOut();
        },
        authStateChanged: (cb) => {
            console.log("ddd");
            firebase.auth().onAuthStateChanged(cb);
        }
    }
})();

export default auth;
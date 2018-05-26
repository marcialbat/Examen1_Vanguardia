import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBspTg45Jt_5QU236S0jj8dPbb_skEBkCs',
  authDomain: 'exame1-e9bb5.firebaseapp.com',
  databaseURL: 'https://exame1-e9bb5.firebaseio.com',
  projectId: 'exame1-e9bb5',
  storageBucket: 'exame1-e9bb5.appspot.com',
  messagingSenderId: '513927561071'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

import firebase from 'firebase/app';
import 'firebase/firestore';

const FIREBASE_INIT_PARAMS = {
  apiKey: 'AIzaSyBz_PzGHgg2nKZQo2LZ9desr9rIp0l8NiI',
  authDomain: 'genoptimize-e6353.firebaseapp.com',
  projectId: 'genoptimize-e6353',
  storageBucket: 'genoptimize-e6353.appspot.com',
  messagingSenderId: '1083557264255',
  appId: '1:1083557264255:web:3f2cf0bdda0debefd3f84a',
};

if (Object.values(FIREBASE_INIT_PARAMS).every((v) => !!v)) {
  firebase.initializeApp(FIREBASE_INIT_PARAMS);
}

export default firebase;
export const db = firebase.firestore();

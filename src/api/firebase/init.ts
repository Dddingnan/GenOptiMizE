import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';

import { GoogleAuthProvider, getAuth, signOut, signInWithRedirect } from 'firebase/auth';

const FIREBASE_INIT_PARAMS = {
  apiKey: 'AIzaSyBz_PzGHgg2nKZQo2LZ9desr9rIp0l8NiI',
  authDomain: 'genoptimize-e6353.firebaseapp.com',
  projectId: 'genoptimize-e6353',
  storageBucket: 'genoptimize-e6353.appspot.com',
  messagingSenderId: '1083557264255',
  appId: '1:1083557264255:web:3f2cf0bdda0debefd3f84a',
};

const app = initializeApp(FIREBASE_INIT_PARAMS);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async (): Promise<void> => {
  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (err) {
    console.error(err);
  }
};

const logout = (): void => {
  signOut(auth);
};

export { auth, signInWithGoogle, logout, firebase };

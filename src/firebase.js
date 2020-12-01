// eslint-disable-next-line no-unused-vars
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAeR5Mwwuxa21oB8rWcirgc0MyOFt1OVZA',
  authDomain: 'chat-app-firebase-41ec4.firebaseapp.com',
  databaseURL: 'https://chat-app-firebase-41ec4.firebaseio.com',
  projectId: 'chat-app-firebase-41ec4',
  storageBucket: 'chat-app-firebase-41ec4.appspot.com',
  messagingSenderId: '482180283160',
  appId: '1:482180283160:web:9991ce241a82fdb4cb3c6d',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

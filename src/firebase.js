import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyDYfdrZy2sPmSSayyonnIZB7pZ6eGKK-QE',
    authDomain: 'soccer-app-a47fa.firebaseapp.com',
    databaseURL: 'https://soccer-app-a47fa.firebaseio.com',
    projectId: 'soccer-app-a47fa',
    storageBucket: 'soccer-app-a47fa.appspot.com',
    messagingSenderId: '168724506834'
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export { firebase, firebaseMatches };

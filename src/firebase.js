// import firebase from 'firebase/app'
// import 'firebase/app'
// import 'firebase/database'

// const config = {
//     apiKey: "AIzaSyDYiC4o4i1r3Hge4sdXEalB10KQ9rIWyQ0",
//     authDomain: "m-city-7874a.firebaseapp.com",
//     databaseURL: "https://m-city-7874a.firebaseio.com",
//     projectId: "m-city-7874a",
//     storageBucket: "m-city-7874a.appspot.com",
//     messagingSenderId: "669950819399"
//   };

// firebase.initializeApp(config);

// const firebaseDB = firebase.database();
// const firebaseMatches = firebaseDB.ref('matches');
// const firebasePromotions = firebaseDB.ref('promotions');

// export {
//     firebase,
//     firebaseMatches,
//     firebasePromotions
// }
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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

const firebasePromotions = firebaseDB.ref('promotions');

export { firebase, firebaseMatches, firebasePromotions };

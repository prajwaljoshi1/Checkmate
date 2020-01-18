import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyARcCal0xaJ6MmtM-bNTkU91jDb9wWZyNk",
    authDomain: "checkmateapp-40703.firebaseapp.com",
    databaseURL: "https://checkmateapp-40703.firebaseio.com",
    projectId: "checkmateapp-40703",
    storageBucket: "checkmateapp-40703.appspot.com",
    messagingSenderId: "190317244162",
    appId: "1:190317244162:web:389d77f5d27518d1661c1b",
    measurementId: "G-30S06TRWMP"
});


export { firebaseConfig as firebase };
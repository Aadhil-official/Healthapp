// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDTTaGDk4w6ThRN8IokJ0LAGNinrzCF5hA",
    authDomain: "healthcare-4b898.firebase.com",
    projectId: "healthcare-4b898",
    storageBucket: "healthcare-4b898.firebasestorage.app",
    messagingSenderId: "259969911880",
    appId: "1:259969911880:ios:ff08689a871c2719b59c7d",
    //   measurementId: "YOUR_MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const auth = initializeApp(app, {
//     persistence: getReactNativePersistence(AsyncStorage),
//   });

export { auth };
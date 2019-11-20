import firebase from 'firebase'
import firestore from 'firebase/firestore'



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAUeEplAg8jXKzXTdvgCm15IFD6noV2N4w",
    authDomain: "landing-c69bb.firebaseapp.com",
    databaseURL: "https://landing-c69bb.firebaseio.com",
    projectId: "landing-c69bb",
    storageBucket: "landing-c69bb.appspot.com",
    messagingSenderId: "124645912089",
    appId: "1:124645912089:web:33e14ca2cdecab32070488"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();
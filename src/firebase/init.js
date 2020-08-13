 import firebase from 'firebase'
 import firestore from 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCPhLCZrMxMpapraqru3mOuU-459MNjv8A",
    authDomain: "mdsmoothiecafe.firebaseapp.com",
    databaseURL: "https://mdsmoothiecafe.firebaseio.com",
    projectId: "mdsmoothiecafe",
    storageBucket: "mdsmoothiecafe.appspot.com",
    messagingSenderId: "313756556184",
    appId: "1:313756556184:web:3077b753574d3066a969ed",
    measurementId: "G-1HLBB7G9PH"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  // export firestore database
  export default firebaseApp.firestore()
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDvN3gEv8Fte7hoAFNq98oad1h9F30FMPg",
    authDomain: "facebook-clone-e8f34.firebaseapp.com",
    projectId: "facebook-clone-e8f34",
    storageBucket: "facebook-clone-e8f34.appspot.com",
    messagingSenderId: "784890696432",
    appId: "1:784890696432:web:5e7fc1581853f5a1486835"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};

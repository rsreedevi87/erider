import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyDGiQr9A0Vsj5WxIVsY5tVbDbcCJSAb_bk",
  authDomain: "erider-8340c.firebaseapp.com",
  projectId: "erider-8340c",
  storageBucket: "erider-8340c.appspot.com",
  messagingSenderId: "1073845735565",
  appId: "1:1073845735565:web:eda52480a686eea2d592c4"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

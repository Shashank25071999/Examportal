import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyA4khlv097YITHF3f6Q1fHoczqL_jug49Y",
    authDomain: "examportalreactapp.firebaseapp.com",
    databaseURL: "https://examportalreactapp.firebaseio.com",
    projectId: "examportalreactapp",
    storageBucket: "examportalreactapp.appspot.com",
    messagingSenderId: "111989776323",
    appId: "1:111989776323:web:6faf11cc4fbaf5032da776"
  };
  
 const fire= firebase.initializeApp(firebaseConfig);
 export default fire;
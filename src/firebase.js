import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC88VfyzIEahen8swBL1wXzU-rFwbe336U",
    authDomain: "crudreact-3d124.firebaseapp.com",
    databaseURL: "https://crudreact-3d124.firebaseio.com",
    projectId: "crudreact-3d124",
    storageBucket: "crudreact-3d124.appspot.com",
    messagingSenderId: "187007308584",
    appId: "1:187007308584:web:3fdc991c2995f03f9f761d"

      };
    
  
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

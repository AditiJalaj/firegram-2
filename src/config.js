import  firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB7BkKx5-DBI4XQql-1he3RTMwVoWve-7Q",
    authDomain: "firegram-48bc0.firebaseapp.com",
    projectId: "firegram-48bc0",
    storageBucket: "firegram-48bc0.appspot.com",
    messagingSenderId: "587142061272",
    appId: "1:587142061272:web:2e1b2bcf0c433e97f78bad"
  };

  firebase.initializeApp(firebaseConfig);
  
  //all initializations with firebase to be done after initializeApp
  const storage=firebase.storage()
  const db=firebase.firestore()
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {storage,db,timestamp}
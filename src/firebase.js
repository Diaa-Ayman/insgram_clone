import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA85n8A9KwH8AxUTX5WIhEhCYrImevADmw",
  authDomain: "insgram-f3cc7.firebaseapp.com",
  projectId: "insgram-f3cc7",
  storageBucket: "insgram-f3cc7.appspot.com",
  messagingSenderId: "728942613940",
  appId: "1:728942613940:web:0ba44bdbfb5145f1da8ee1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDwKS_TTwavqDVWRhSXzVKi0_jgA1qfRRw",
  authDomain: "vuetify-todo-d6c92.firebaseapp.com",
  databaseURL: "https://vuetify-todo-d6c92.firebaseio.com",
  projectId: "vuetify-todo-d6c92",
  storageBucket: "vuetify-todo-d6c92.appspot.com",
  messagingSenderId: "848359486849",
  appId: "1:848359486849:web:8d0b2fb5bc3ab9be20e480",
  measurementId: "G-C3FCZ3M191"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7j7Jl9kOj0aZXrcjaaC6EvBvec1V1oII",
  authDomain: "aripatodo-6b409.firebaseapp.com",
  databaseURL: "https://aripatodo-6b409.firebaseio.com",
  projectId: "aripatodo-6b409",
  storageBucket: "aripatodo-6b409.appspot.com",
  messagingSenderId: "1003357638954",
  appId: "1:1003357638954:web:ad9bf8d4c073a65cdf0e53",
  measurementId: "G-GHXDFQBWVD"
};

const app = firebase.initializeApp(firebaseConfig);

export default app.firestore();
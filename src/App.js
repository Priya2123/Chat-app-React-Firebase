import React from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBnwJ9cqNoC759KzJXSiIlOF9rqxypotV4",
  authDomain: "chat-23af4.firebaseapp.com",
  databaseURL: "https://chat-23af4.firebaseio.com",
  projectId: "chat-23af4",
  storageBucket: "chat-23af4.appspot.com",
  messagingSenderId: "209339788556",
  appId: "1:209339788556:web:6f7f06df0ddcac322d6d29",
  measurementId: "G-EK8EEZG86D",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

//to check if the user is logged in or not
const [user] = useAuthState(auth);
function App() {
  return (
    <div className="App">
      <header></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new.firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  function SignOut() {
    return (
      auth.currentUser && (
        <button onClick={() => auth.SignOut()}>Sign Out</button>
      )
    );
  }
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}
export default App;

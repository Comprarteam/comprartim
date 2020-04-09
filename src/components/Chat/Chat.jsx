import React, { Component } from 'react';
import firebase from 'firebase';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYCPRz6ROZ6C_RVPst2pvYMWFt1zhB45g',
  authDomain: 'comprartim.firebaseapp.com',
  databaseURL: 'https://comprartim.firebaseio.com',
  projectId: 'comprartim',
  storageBucket: 'comprartim.appspot.com',
  messagingSenderId: '450917423868',
  appId: '1:450917423868:web:58ccb58da8e1035e6bd579',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();


myFirebase
  .auth()
  .signInWithPopup(new firebase.auth.GoogleAuthProvider());

class Chat extends Component {
  static handleNewUserMessage(newMessage) {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage('response');
  }

  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
  }

  render() {
    return (
      <div className="App">
        <Widget handleNewUserMessage={Chat.handleNewUserMessage} />
      </div>
    );
  }
}

export default Chat;

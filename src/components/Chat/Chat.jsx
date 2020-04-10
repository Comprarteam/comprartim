import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import { initializeFirebase, createChatRoom } from 'firebase-chat-ready-api';

initializeFirebase(
  {
    apiKey: 'AIzaSyBYCPRz6ROZ6C_RVPst2pvYMWFt1zhB45g',
    authDomain: 'comprartim.firebaseapp.com',
    databaseURL: 'https://comprartim.firebaseio.com',
    projectId: 'comprartim',
    storageBucket: 'comprartim.appspot.com',
    messagingSenderId: '450917423868',
    appId: '1:450917423868:web:58ccb58da8e1035e6bd579',
  },
);

// firebase.firestore().settings({
//   timestampsInSnapshots: true,
// });

// export const myFirebase = firebase;
// export const myFirestore = firebase.firestore();
// export const myStorage = firebase.storage();


/* myFirebase
  .auth()
  .signInWithPopup(new firebase.auth.GoogleAuthProvider()); */

const userA = { userId: '1' };
const userB = { userId: '2' };
const members = [userA, userB];

let newchatRoom;
class Chat extends Component {
  static handleNewUserMessage(newMessage) {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    newchatRoom.sendMessage(newMessage, userA, (err) => {
      if (!err) console.log('message sent');
    });
  }

  async componentDidMount() {
    newchatRoom = await createChatRoom('Chat', members)
      .then((result) => {
        console.log(result);
        return result;
      }).catch((err) => {
        console.log(err);
      });
    console.log(this.newchatRoom);
    newchatRoom.getMessagesAndListen((message) => {
      console.log(message);
      if (message.from !== userA.userId) {
        addResponseMessage(message.body);
      }
    });
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

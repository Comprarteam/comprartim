import React, { Component } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import { initializeFirebase, getChatRoom } from 'firebase-chat-ready-api';

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

const currentUser = { userId: 'efe13fseaef' };
const chatId = 'MvxZXqpW821W32JZcc2b';
let chatRoom;
const currentDate = Date.now();

class Chat extends Component {
  static handleNewUserMessage(newMessage) {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    chatRoom.sendMessage(newMessage, currentUser, (err) => {
      if (!err) console.log('message sent');
    });
  }

  async componentDidMount() {
    chatRoom = await getChatRoom(chatId)
      .then((result) => {
        console.log(result);
        return result;
      }).catch((err) => {
        console.log(err);
      });

    console.log(this.newchatRoom);

    chatRoom.getAllMessages((message) => {
      if (message.from === currentUser.userId) {
        addUserMessage(message.body);
      } else {
        addResponseMessage(message.body);
      }
    }, () => {
      console.log('Recovered Messages');
    });

    chatRoom.getMessagesAndListen((message) => {
      if (message.createdAt > currentDate && message.from !== currentUser.userId) {
        addResponseMessage(message.body);
      }
    });
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

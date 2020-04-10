import React, { Component } from 'react';
import {
  Widget, addResponseMessage, addUserMessage, dropMessages,
} from 'react-chat-widget';
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


let chatRoom;
const currentDate = Date.now();

class Chat extends Component {
  constructor(props) {
    super(props);
    const { params } = props.match;
    this.currentUser = { userId: params.userId };
    this.contact = params.contact;
    this.chatId = params.chatId;

    this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
  }

  async componentDidMount() {
    dropMessages();
    chatRoom = await getChatRoom(this.chatId)
      .then((result) => {
        console.log(result);
        return result;
      }).catch((err) => {
        console.log(err);
      });

    chatRoom.getAllMessages((message) => {
      if (message.from === this.currentUser.userId) {
        addUserMessage(message.body);
      } else {
        addResponseMessage(message.body);
      }
    }, () => {
      console.log('Recovered Messages');
    });

    chatRoom.getMessagesAndListen((message) => {
      if (message.createdAt > currentDate && message.from !== this.currentUser.userId) {
        addResponseMessage(message.body);
      }
    });
  }

  handleNewUserMessage(newMessage) {
    console.log(`New incoming message ${newMessage}`);
    console.log(this.currentUser);
    chatRoom.sendMessage(newMessage, this.currentUser, (err) => {
      if (!err) console.log('message sent');
    });
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="Xat de sol·licitud de compra"
          subtitle={`Estàs parlant amb ${this.contact}`}
        />
      </div>
    );
  }
}

export default Chat;

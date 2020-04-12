import React, { useEffect } from 'react';
import {
  addResponseMessage, addUserMessage, dropMessages, Widget,
} from 'react-chat-widget';
import { initializeFirebase, getChatRoom } from 'firebase-chat-ready-api';
import Header from '../Header/Header';

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
let currentDate;
let previousMessageId;

const Chat = ({ match }) => {
  const { params } = match;
  const currentUser = { userId: params.userId };
  const { contact } = params;
  const { chatId } = params;

  const getData = async () => {
    dropMessages();
    currentDate = Date.now();

    chatRoom = await getChatRoom(chatId)
      .then((result) => {
        console.log(result);
        return result;
      }).catch((err) => {
        console.log(err);
      });

    console.log(chatRoom.listenersToRemove.length);

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
      console.log(message);
      console.log(currentUser);
      if (message.createdAt > currentDate && message.from !== currentUser.userId
        && message.messageRef.id !== previousMessageId) {
        previousMessageId = message.messageRef.id;
        addResponseMessage(message.body);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New incoming message ${newMessage}`);
    console.log(currentUser);
    chatRoom.sendMessage(newMessage, currentUser, (err) => {
      if (!err) console.log('message sent');
    });
  };

  return (
    <div className="App">
      <Header title="Xat" />
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Xat de sol·licitud de compra"
        subtitle={`Estàs parlant amb ${contact}`}
      />
    </div>
  );
};

export default Chat;

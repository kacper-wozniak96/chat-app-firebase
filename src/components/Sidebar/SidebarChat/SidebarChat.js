/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.scss';
import db from '../../../firebase';

export default function SidebarChat({ addNewChat, name }) {

  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Yo enter name");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName
      })
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last message ...</p>
      </div>
    </div>
  ) : (
      <div onClick={createChat} className="sidebarChat" onKeyDown={createChat} role="button" tabIndex="0">
        <h2>Add New Chat</h2>
      </div>
    )



}

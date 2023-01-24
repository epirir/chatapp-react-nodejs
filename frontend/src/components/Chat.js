import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [chats, setChats] = useState([]);

  const getChats = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };

  useEffect(() => {
    getChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => {
        return <li key={chat._id}>{chat.chatName}</li>;
      })}
    </div>
  );
};

export default Home;

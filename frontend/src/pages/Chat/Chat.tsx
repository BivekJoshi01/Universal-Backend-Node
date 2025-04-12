import React, { useEffect, useState } from "react";
import axios from "axios";

interface ChatType {
  _id: string;
  chatName: string;
  isGroupChat: boolean;
  users: string[]; // Adjust this based on the actual structure
  latestMessage?: string; // Optional - adjust as needed
}

const Chat: React.FC = () => {
  const [chats, setChats] = useState<ChatType[]>([]);

  const fetchChats = async () => {
    try {
      const { data } = await axios.get<ChatType[]>(
        "http://localhost:5000/api/chats"
      );
      setChats(data);
    } catch (error) {
      console.error("Failed to fetch chats", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats?.map((data, index) => (
        <div key={data._id}>{data.chatName}</div>
      ))}
    </div>
  );
};

export default Chat;

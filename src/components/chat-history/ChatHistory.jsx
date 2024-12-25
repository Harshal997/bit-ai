import React from "react";
import "./chathistory.css";
import Chats from "../chats/Chats";
import moment from "moment";

const ChatHistory = ({ history, visible, setVisible, review, chats }) => {
  return (
    <div className="history-container">
      {history.map((entry, index) => (
        <div>
          <h3>{moment(entry.date).format("DD MMM YYYY")}</h3>
          <div key={index} className="history-entry">
            {entry.chats.map((chat, chatIndex) => (
              <Chats
                key={chat.id}
                chat={chat}
                setVisible={setVisible}
                chats={chats}
                review={review}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;

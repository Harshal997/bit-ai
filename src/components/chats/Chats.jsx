import React from "react";
import profile from "../../assets/profile.png";
import logo from "../../assets/logo.png";
import "./chats.css";
import thumbs_up from "../../assets/thumbs-up.png";
import thumbs_down from "../../assets/thumbs-down.png";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Chats = ({ chat, visible, setVisible }) => {
  console.log("data", chat);
  return (
    <div className="chats-container">
      <img
        src={chat.user ? profile : logo}
        alt="profile"
        height={67}
        width={67}
      />
      <div className="message-container">
        <h4>{chat.user ? "You" : "AI"}</h4>
        <p>{chat.prompt}</p>
        <p className="time">{chat.time}</p>
        {!chat.user && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "1em",
            }}
          >
            <img onClick={() => setVisible(true)} style={{cursor: 'pointer'}} src={thumbs_up} alt="thumbs-up" height={15} width={15} />
            <img onClick={() => setVisible(true)} style={{cursor: 'pointer'}} src={thumbs_down} alt="thumbs-down" height={15} width={15} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;

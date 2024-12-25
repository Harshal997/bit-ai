import React from "react";
import profile from "../../assets/profile.png";
import logo from "../../assets/logo.png";
import "./chats.css";
import thumbs_up from "../../assets/thumbs-up.png";
import thumbs_down from "../../assets/thumbs-down.png";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Chats = ({ chat, setVisible, id, setChatId }) => {
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
            {chat.review ? (
              <p style={{fontFamily: "Ubuntu", }}><b>Review:</b> {chat.review}</p>
            ) : (
              <>
                <img
                  onClick={() => {
                    setVisible(true);
                    setChatId(id);
                  }}
                  style={{ cursor: "pointer" }}
                  src={thumbs_up}
                  alt="thumbs-up"
                  height={15}
                  width={15}
                />
                <img
                  onClick={() => {
                    setVisible(true);
                    setChatId(id);
                  }}
                  style={{ cursor: "pointer" }}
                  src={thumbs_down}
                  alt="thumbs-down"
                  height={15}
                  width={15}
                />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;

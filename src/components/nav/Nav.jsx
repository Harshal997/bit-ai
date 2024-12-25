import React from "react";
import "./nav.css";
import { FaPencilAlt } from "react-icons/fa";

const Nav = ({ setShowHistory, setHasAsked }) => {
  return (
    <div className="nav">
      <div className="new-conversation">
        <h4>New Chat</h4>
        <FaPencilAlt style={{ margin: 0 }} />
      </div>
      <p
        onClick={() => {
          setHasAsked(true);
          setShowHistory(true);
        }}
      >
        Past Conversations
      </p>
    </div>
  );
};

export default Nav;

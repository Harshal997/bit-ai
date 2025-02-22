import React from "react";
import "./prompt.css";
import { handleAsk } from "../home/Home";

const Prompt = ({
  prompt,
  setHasAsked,
  setPrompt,
  setChats,
  setShowHistory,
}) => {
  return (
    <div
      className="prompt-container"
      onClick={() =>
        handleAsk(setChats, setHasAsked, setPrompt, setShowHistory, prompt)
      }
    >
      <h3>{prompt}</h3>
      <p>Get immediate AI generated response</p>
    </div>
  );
};

export default Prompt;

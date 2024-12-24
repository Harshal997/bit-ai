import React, { useState } from "react";
import "./home.css";
import logo from "../../assets/logo.png";
import Prompt from "../prompt/Prompt";
import Chats from "../chats/Chats";
import data from "../../data.json";
import Feedback from "../feedback/Feedback";

const prompts = [
  "Hi, what is the weather",
  "Hi, what is my location",
  "Hi, what is the temperature",
  "Hi, how are you",
];

const Home = () => {
  const [chats, setChats] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [hasAsked, setHasAsked] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);

  const handleAsk = (e) => {
    if (prompt === "") {
      alert("Please type something!");
      return;
    }
    console.log(prompt);
    setChats((prevChats) => [
      ...prevChats,
      {
        id: Date.now(),
        user: true,
        prompt: prompt,
        time: new Date().getHours() + ":" + new Date().getMinutes(),
      },
    ]);
    const matchedQuestion = data.find(
      (item) => item.question.toLowerCase() === prompt.toLowerCase()
    );

    setChats((prevChats) => [
      ...prevChats,
      {
        id: Date.now(),
        user: false,
        prompt: matchedQuestion
          ? matchedQuestion.response
          : "As an AI Language Model, I don’t have the details",
        time: new Date().getHours() + ":" + new Date().getMinutes(),
      },
    ]);
    setHasAsked(true);
    setPrompt("");
  };

  return (
    <div className="container">
      {feedbackVisible && (
        <div className="feedback">
          <Feedback visible={feedbackVisible} setVisible={setFeedbackVisible} />
        </div>
      )}
      <h1>Bot AI</h1>
      {!hasAsked ? (
        <>
          <div className="heading">
            <h1>How Can I Help You Today</h1>
            <img src={logo} alt="" />
          </div>
          <div className="prompts-container">
            {prompts &&
              prompts.length > 0 &&
              prompts.map((prompt, index) => (
                <Prompt key={index} prompt={prompt} />
              ))}
          </div>
        </>
      ) : (
        <div className="chats">
          {chats &&
            chats.length &&
            chats.map((chat) => <Chats key={chat.id} chat={chat} visible={feedbackVisible} setVisible={setFeedbackVisible} />)}
        </div>
      )}
      <div className="input-query">
        <input
          value={prompt}
          type="text"
          className="input"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handleAsk}>Ask</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Home;

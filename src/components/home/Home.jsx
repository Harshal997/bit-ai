import React, { useState } from "react";
import "./home.css";
import logo from "../../assets/logo.png";
import Prompt from "../prompt/Prompt";
import Chats from "../chats/Chats";
import data from "../../data.json";
import Feedback from "../feedback/Feedback";
import Nav from "../nav/Nav";
import ChatHistory from "../chat-history/ChatHistory";

const prompts = [
  "Hi, what is the weather",
  "Hi, what is my location",
  "Hi, what is the temperature",
  "Hi, how are you",
];

export const handleSave = (chats) => {
  if (chats.length === 0) {
    alert("Please start a conversation to save!");
    return;
  }
  const data = localStorage.getItem("chats");
  const storedConversations = data ? JSON.parse(data) : [];

  const newConversation = {
    date: new Date().toISOString(),
    chats: chats,
  };

  const newStoredData = [...storedConversations, newConversation];
  localStorage.setItem("chats", JSON.stringify(newStoredData));
  alert("Saved Successfully!");
};

export const handleAsk = (
  setChats,
  setHasAsked,
  setPrompt,
  setShowHistory,
  prompt
) => {
  if (prompt === "") {
    alert("Please type something!");
    return;
  }
  setShowHistory(false);
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

const Home = () => {
  const [chats, setChats] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [hasAsked, setHasAsked] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [review, setReview] = useState("");
  const [chatId, setChatId] = useState(0);
  const history = localStorage.getItem("chats")
    ? JSON.parse(localStorage.getItem("chats"))
    : [];
  console.log("hustiey", history);
  return (
    <div style={{}}>
      <Nav
        setChats={setChats}
        setShowHistory={setShowHistory}
        setHasAsked={setHasAsked}
      />
      <div className="container">
        {feedbackVisible && (
          <div className="feedback">
            <Feedback
              visible={feedbackVisible}
              setVisible={setFeedbackVisible}
              chats={chats}
              review={review}
              setReview={setReview}
              chatId={chatId}
            />
          </div>
        )}
        <h1 onClick={() => setHasAsked(false)}>Bot AI</h1>
        {!hasAsked ? (
          <>
            <div className="heading">
              <h1>How Can I Help You Today</h1>
              <img src={logo} alt="logo" />
            </div>
            <div className="prompts-container">
              {prompts &&
                prompts.length > 0 &&
                prompts.map((prompt, index) => (
                  <Prompt
                    setChats={setChats}
                    setPrompt={setPrompt}
                    setHasAsked={setHasAsked}
                    setShowHistory={setShowHistory}
                    key={index}
                    prompt={prompt}
                  /> // setChats, setHasAsked, setPrompt, prompt
                ))}
            </div>
          </>
        ) : !showHistory ? (
          <div className="chats">
            {chats &&
              chats.length &&
              chats.map((chat, index) => (
                <Chats
                  key={chat.id}
                  id={chat.id}
                  chat={chat}
                  visible={feedbackVisible}
                  setVisible={setFeedbackVisible}
                  showHistory={showHistory}
                  chats={chats}
                  review={review}
                  setChatId={setChatId}
                />
              ))}
          </div>
        ) : (
          <ChatHistory
            history={history}
            visible={feedbackVisible}
            setVisible={setFeedbackVisible}
            showHistory={showHistory}
            chats={chats}
            review={review}
          />
        )}
        <div className="input-query">
          <input
            value={prompt}
            type="text"
            className="input"
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={() =>
              handleAsk(
                setChats,
                setHasAsked,
                setPrompt,
                setShowHistory,
                prompt
              )
            }
          >
            Ask
          </button>
          <button onClick={() => handleSave(chats)}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

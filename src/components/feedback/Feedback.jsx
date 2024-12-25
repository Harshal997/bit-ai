import React, { useEffect, useState } from "react";
import "./feedback.css";
import { MdClose, MdFeedback } from "react-icons/md";

export const handleSubmit = (id, chats, review, setVisible) => {
  console.log(id, chats, review);
  const index = chats.findIndex((chat) => chat.id === id);
  chats[index].review = review;
  console.log(index);
  setVisible(false);
};

const Feedback = ({
  visible,
  setVisible,
  setReview,
  chats,
  chatId,
  review,
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setReview(value);
  }, [value]);

  return (
    <div className="feedback-container">
      <div className="feedback-heading-close">
        <div className="feedback-heading">
          <MdFeedback
            style={{
              color: "grey",
              fontSize: "32px",
              cursor: "pointer",
            }}
            title="Feedback"
          />
          <h5>Provide Additional Feedback</h5>
        </div>
        <MdClose
          style={{ color: "black", fontSize: "24px", cursor: "pointer" }}
          onClick={() => setVisible(false)}
        />
      </div>
      <input
        name="feedback"
        id=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={() => handleSubmit(chatId, chats, review, setVisible)}>
        Submit
      </button>
    </div>
  );
};

export default Feedback;

import React, { useState } from "react";
import "./feedback.css";
import { MdClose, MdFeedback } from "react-icons/md";

const Feedback = ({visible, setVisible}) => {
    const [value, setValue] = useState("");
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
      <input name="feedback" id="" value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button>Submit</button>
    </div>
  );
};

export default Feedback;

import React from "react";
import "./singleAnswer.css";

function SingleAnswer({ singleAns, modelAnsLst }) {
  const ansInfo = modelAnsLst[parseInt(singleAns.substring(1)) - 1];
  return (
    <div className="answer-box" id="answer-box">
      <div className="answer">{ansInfo.text}</div>
      <div className="answer-info">
        <div>
          <li className="c3-item user-name-box">
            Ans{" "}
            <span className="user-name" id="user-name">
              {ansInfo.ansBy}
            </span>
          </li>
          <li className="c3-item question-date-box">
            On{" "}
            <span className="question-date" id="question-date">
              {" "}
              {ansInfo.ansOn}
            </span>
          </li>
          <li className="c3-item question-time-box">
            {" "}
            At{" "}
            <span className="question-time" id="question-time">
              {" "}
              {ansInfo.ansAt}
            </span>
          </li>
        </div>
      </div>
    </div>
  );
}

export default SingleAnswer;

import React from "react";
import "./answer.css";
import SingleAnswer from "./SingleAnswer";
import Nav from "../Nav/Nav";

function Answer({ model, Qtitle, onChange, showAddAnsPage }) {
  // find the index question
  const QLst = model.getQuestions();
  const modelAnsLst = model.getAnswers();
  console.log(modelAnsLst);
  var answerLst = [];
  var index = 0;

  console.log(Qtitle);
  // get the index of question
  for (var i = 0; i < QLst.length; i++) {
    if (QLst[i].title == Qtitle) {
      answerLst = QLst[i].answers;
      index = i;
      break;
    }
  }

  console.log(index);

  var len = answerLst.length;
  // set up the nav
  const number = len > 1 ? len + " Answers" : len + " Answer";

  //increase the views
  model.increaseView(index);

  return (
    <>
      <Nav title={Qtitle} number={number} onChange={onChange} />
      <div className="question-section" id=" question-section">
        <div className="answer-views" id="answer-views">
          {QLst[index].views > 1
            ? QLst[index].views + " Views"
            : QLst[index].views + " View"}
        </div>
        <div className="answered-question" id="answered-question">
          {QLst[index].text}
        </div>
        <div className="question-info" id="answer-user -info">
          <div>
            <li className="c3-item user-name-box">
              Asked By{" "}
              <span className="user-name" id="user-name">
                {QLst[index].askedBy}
              </span>
            </li>
            <li className="c3-item question-date-box">
              On{" "}
              <span className="question-date" id="question-date">
                {" "}
                {QLst[index].askedOn}
              </span>
            </li>
            <li className="c3-item question-time-box">
              {" "}
              At{" "}
              <span className="question-time" id="question-time">
                {" "}
                {QLst[index].askedAt}
              </span>
            </li>
          </div>
        </div>
      </div>

      {/* Single answer */}
      {answerLst.map((singleAns, key) => {
        return (
          <SingleAnswer
            singleAns={singleAns}
            key={key}
            modelAnsLst={modelAnsLst}
          />
        );
      })}

      {/* Add Answer Button */}
      <div className="Answer-question" id="Answer_question">
        <button
          id="Answer-question-btn"
          onClick={() => {
            showAddAnsPage();
          }}
        >
          Answer Question
        </button>
      </div>
    </>
  );
}

export default Answer;

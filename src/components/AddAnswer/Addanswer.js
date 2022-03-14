import React, { useState } from "react";
import "./addAnswer.css";

function Addanswer({ model, title, showAnsPage }) {
  const error_message = [
    "Text Box can't be empty",
    "Usename can't more than than 15 characters",
    "Username can't be empty",
  ];
  let answer = "";
  let flag = false;
  let index = 0;
  let qLst = model.getQuestions();
  const len = model.getAnswers().length + 1;
  const [error, setError] = useState([]);
  const [clear, setClear] = useState(false);
  const onChange = (event) => {
    event.preventDefault();
    const Aid = "a" + len.toString();
    let myDate = new Date();
    let monthsList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Aug",
      "Oct",
      "Nov",
      "Dec",
    ];
    let date = myDate.getDate();
    let month = monthsList[myDate.getMonth()];
    let year = myDate.getFullYear();
    let time = myDate.getHours() + ":" + myDate.getMinutes();
    let content = event.target[0].value;
    let username = event.target.ansBy.value;

    if (content.length <= 0) {
      flag = true;
      setError((error) => [...error, error_message[0]]);
    }

    if (username.length > 15) {
      flag = true;
      setError((error) => [...error, error_message[1]]);
    } else if (username.length == 0) {
      flag = true;
      setError((error) => [...error, error_message[2]]);
    }

    const newAnswer = {
      aid: Aid,
      text: content,
      ansBy: username,
      ansOn: month + " " + date.toString() + ", " + year.toString(),
      ansAt: time,
    };

    answer = newAnswer;

    for (var i = 0; i < qLst.length; i++) {
      if (qLst[i].title == title) {
        index = i;
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    if (clear) {
      setError([]);
    }
    onChange(event);
    if (!flag) {
      model.addAnswers(answer);
      model.appendAnswer(index, len - 1);
      showAnsPage();
    }
    flag = false;
    setClear(true);
  };

  return (
    <div className="addAnswer" id="addAnswer">
      {error.length > 0 ? (
        <div className="error-ask" id="error-ask">
          {error.map((single, key) => {
            return <p key={key}>{single}</p>;
          })}
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div>Answer Text</div>
        <textarea
          name="addAnswerTxt"
          id="addAnswerTxt"
          cols={300}
          rows={10}
        ></textarea>
        <div>Username</div>
        <p>Should not be more than 15 charcaters</p>
        <input name="ansBy" type="text" id="answerBy" />
        <button className="post-ans-btn" id="post_answer_btn" type="submit">
          Post Answer
        </button>
      </form>
    </div>
  );
}

export default Addanswer;

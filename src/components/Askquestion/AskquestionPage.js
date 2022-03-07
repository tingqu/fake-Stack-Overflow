import React, { useState, useEffect } from "react";
import "./askQuestion.css";

function AskquestionPage({ model, showQuestion, addQuestion }) {
  // add error statement
  const error_message = [
    "Title is too long",
    "Title can't be empty",
    "Text Box can't be empty",
    "Usename can't more than than 15 characters",
    "Username can't be empty",
  ];

  let Question = "";
  let flag = false;
  const [error, setError] = useState([]);

  // Create the new Question
  const getValue = (event) => {
    event.preventDefault();
    var myDate = new Date();
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
    const title = event.target.question_title.value;
    const Text = event.target[1].value;
    const tags = event.target.ask_tags.value;
    const userName = event.target.ask_username.value;

    if (title.trim().length > 100) {
      error.push(error_message[0]);
      flag = true;
    } else if (title.trim().length === 0) {
      flag = true;
      error.push(error_message[1]);
    }

    if (Text.trim().length === 0) {
      flag = true;
      error.push(error_message[2]);
    }

    // find the tag list
    let questionTags = tags.split(" ");

    let lowerCase = questionTags.map((tag) => tag.toLowerCase());

    questionTags = new Set(lowerCase);

    questionTags = Array.from(questionTags);

    var questionTagsList = [];

    for (var i = 0; i < questionTags.length; i++) {
      const testing = model.tagExist(questionTags[i]);
      if (testing == " ") {
        const newTag = {
          tid: "t" + model.tagsLength().toString(),
          name: questionTags[i],
        };

        model.addTags(newTag);
        questionTagsList.push(newTag.tid);
      } else {
        questionTagsList.push(model.tagExist(questionTags[i]));
      }
    }

    // Error in userName
    if (userName.length > 15) {
      flag = true;
      setError([...error, error_message[3]]);
    } else if (userName.trim().length === 0) {
      flag = true;
      setError([...error, error_message[4]]);
    }

    //Create the new Question
    const newQuestion = {
      title: title,
      text: Text,
      tagIds: questionTagsList,
      askedBy: userName,
      askedOn: month + " " + date.toString() + ", " + year.toString(),
      askedAt: time,
      answers: [],
      views: 0,
    };

    Question = newQuestion;
  };

  const handleSubmit = (event) => {
    getValue(event);
    if (!flag) {
      addQuestion(Question);
      showQuestion();
    }
    flag = false;
  };

  // useEffect(() => {
  //   if (error.length != 0) {
  //     setError([]);
  //   }
  // });

  return (
    <>
      <div className="ask-a-question" id="ask-a-question">
        {error.length > 0 ? (
          <div className="error-ask" id="error-ask">
            {error.map((single, key) => {
              <p key={key}>{single}</p>;
            })}
          </div>
        ) : null}
        <form className="ask-content" id="ask-content" onSubmit={handleSubmit}>
          <div className="a1">
            <h1>Question Title</h1>
            <p> Title should not be more than 100 characters</p>
            <input
              type="text"
              name="question_title"
              id="ask-question-title"
              placeholder="Web scripting invalid syntax URL"
            />
          </div>
          <div className="a2">
            <h1>Question Text</h1>
            <p>Add details</p>
            <textarea
              id="ask-question-text"
              className="ask-question-text"
              rows={300}
              cols={100}
            />
          </div>
          <div>
            <h1>Tags</h1>
            <p>Add Keywords seperated by whitespaces</p>
            <input type="text" name="ask_tags" id="ask-tags" />
          </div>
          <div>
            <h1>Username</h1>
            <p>Should not be more than 15 characters</p>
            <input
              type="text"
              name="ask_username"
              id="ask-username"
              className="ask-username"
            />
          </div>
          <div>
            <button
              className="post-a-question"
              id="post-question-button"
              value="Post A Question"
              type="submit"
            >
              Post Question
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AskquestionPage;

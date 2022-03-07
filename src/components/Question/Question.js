import React, { useState } from "react";
import SingleQ from "./SingleQ";
import Nav from "../Nav/Nav.js";
import "./Question.css";

function Question({
  question_lst,
  model,
  onChange,
  showAnswers,
  getAnsTitle,
  selectNum,
}) {
  let title = "";
  let number = "";

  // Set the correct nav content
  if (selectNum == 0) {
    title = " All Question ";
  } else if (selectNum == 1) {
    title = "Question tagged [" + question_lst[1] + "]";
    question_lst = question_lst[0];
  } else {
    title = "Search Results";
  }

  number =
    question_lst.length > 1
      ? question_lst.length + " Questions"
      : question_lst.length + " Question";
  const not_found = question_lst.length == 0 ? true : false;
  return (
    <>
      <Nav title={title} number={number} onChange={onChange} />
      <div id="question-page">
        {not_found ? (
          <div className="search-not-found" id="search_error">
            No Question Found
          </div>
        ) : (
          <div id="question-box">
            {question_lst.map((singleQ, index) => {
              return (
                <SingleQ
                  key={index}
                  singleQ={singleQ}
                  model={model}
                  showAnswers={showAnswers}
                  getAnsTitle={getAnsTitle}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Question;

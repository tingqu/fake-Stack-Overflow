import React, { useState } from "react";
import Searchnotfound from "./Searchnotfound.js";
import SingleQ from "./SingleQ";
import Nav from "../Nav/Nav.js";

function Question({ question_lst, model , setAskQuestionFlag}) {
  const title = "All Questions";
  const number =
    model.getQuestions().length > 1
      ? model.getQuestions().length + " Questions"
      : model.getQuestions().length + " Question";
  const [not_found, setNot_found] = useState(false);
  return (
    <>
      <Nav title={title} number={number}  askQuestionFlag = {setAskQuestionFlag} />
      <div id="question-page">
        {not_found ? (
          <Searchnotfound noResult={setNot_found} id="search-error" />
        ) : (
          <div id="question-box">
            {question_lst.map((singleQ, index) => {
              return <SingleQ key={index} singleQ={singleQ} model={model} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Question;

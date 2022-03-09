import React, { useState } from "react";
import "./header.css";

function Header({ model, showQuestion, showTags, Qflag, Tflag, select }) {
  const [Question_flag, setQuestion_flag] = useState(true);
  const [Tag_flag, set_Tag_flag] = useState(false);
  // const question_lst = model.getQuestions();
  return (
    <>
      <div className="banner" id="bannerName">
        <ul>
          <li
            className={`flex1 ${Question_flag && Qflag ? "hover_color" : ""}`}
            id="Questions"
            onClick={() => {
              setQuestion_flag(true);
              set_Tag_flag(false);
              showQuestion();
            }}
          >
            <a className="questions"> Questions</a>
          </li>
          <li
            className={`flex2 ${Tag_flag && Tflag ? "hover_color" : ""}`}
            id="tags"
            onClick={() => {
              set_Tag_flag(true);
              setQuestion_flag(false);
              showTags();
            }}
          >
            <a href="#" className="tags" id="tags">
              Tags
            </a>
          </li>
          <li className="flex3">
            <div className="title">Fake Stack Overflow</div>
          </li>
          <li className="flex4">
            <input
              type="text"
              id="search"
              placeholder="Search ..."
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  const searchInput = event.target.value.split(" ");
                  var tagList = [];
                  event.target.value = "";

                  // check if there is tag inside
                  for (var i = 0; i < searchInput.length; i++) {
                    if (
                      searchInput[i].includes("[") &&
                      searchInput[i].includes("]")
                    ) {
                      tagList.push(
                        searchInput[i].substring(1, searchInput[i].length - 1)
                      );
                      searchInput.splice(i, 1);
                    }
                  }
                  var questionList = model.getQuestions();
                  var modelTagLst = model.getTags();

                  var resultQuestion = [];
                  var resultTag = [];
                  for (var i = 0; i < searchInput.length; i++) {
                    const singleSearch = searchInput[i].toLowerCase();
                    for (var j = 0; j < questionList.length; j++) {
                      const ttl = questionList[j].title.toLowerCase();
                      const txt = questionList[j].text.toLowerCase();
                      if (
                        ttl.includes(singleSearch) ||
                        txt.includes(singleSearch)
                      ) {
                        resultQuestion.push(questionList[j]);
                      }
                    }
                  }

                  for (var i = 0; i < tagList.length; i++) {
                    const singleTag = tagList[i].toLowerCase();
                    for (var j = 0; j < modelTagLst.length; j++) {
                      const txt = modelTagLst[j].name.toLowerCase();
                      if (txt.includes(singleTag)) {
                        resultTag.push(modelTagLst[j]);
                      }
                    }
                  }

                  if (resultTag.length != 0) {
                    for (var i = 0; i < resultTag.length; i++) {
                      const tagID = resultTag[i].tid;
                      for (var j = 0; j < questionList.length; j++) {
                        const tagArr = questionList[j].tagIds;
                        if (tagArr.includes(tagID)) {
                          resultQuestion.push(questionList[j]);
                        }
                      }
                    }
                  }

                  resultQuestion = [...new Set(resultQuestion)];
                  select(resultQuestion, 2);
                }
              }}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;

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
                  let str = event.target.value;

                  event.target.value = "";

                  let tagList = [];

                  // separate tags and string

                  let front = 0;
                  let back = 0;
                  let arr = [];
                  let index = 0;
                  while (index < str.length) {
                    front = str.indexOf("[", index);
                    back = str.indexOf("]", index);
                    if (front != -1 && back != -1) {
                      arr.push(str.slice(front, back + 1));
                      index = back;
                    }
                    index += 1;
                  }

                  index = 0;
                  let index2 = 0;
                  let strArr = "";
                  while (index < arr.length) {
                    front = str.indexOf(arr[index]);
                    strArr += str.slice(index2, front) + " ";
                    index2 = front + arr[index].length;
                    index++;
                  }
                  strArr += str.slice(index2);

                  console.log("arr: ", arr);
                  console.log("strArr ", strArr);

                  for (var i = 0; i < arr.length; i++) {
                    if (arr[i].length == 2) {
                      continue;
                    } else {
                      var value = arr[i].substring(1, arr[i].length - 1).trim();
                      if (value.length == 0) {
                        continue;
                      }
                      tagList.push(value);
                    }
                  }
                  var questionList = model.getQuestions();
                  var modelTagLst = model.getTags();

                  var resultQuestion = [];
                  var resultTag = [];

                  strArr = strArr.split(" ");

                  console.log("strArr ", strArr);
                  for (let k = 0; k < strArr.length; k++) {
                    if (strArr[k].trim().length == 0) {
                      continue;
                    }

                    if (
                      strArr[k].trim() == "is" ||
                      strArr[k].trim() == "the" ||
                      strArr[k].trim() == "what" ||
                      strArr[k].trim() == "how" ||
                      strArr[k].trim() == "why" ||
                      strArr[k].trim() == "when" ||
                      strArr[k].trim() == "a"
                    ) {
                      continue;
                    }
                    const singleSearch = strArr[k].trim().toLowerCase();
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

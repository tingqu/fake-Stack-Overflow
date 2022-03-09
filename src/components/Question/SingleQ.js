import React from "react";
import "./singleQ.css";

function SingleQ({ singleQ, model, showAnswers, getAnsTitle }) {
  const tagLst = model.getTags();
  const tags = singleQ.tagIds;
  const ans = singleQ.answers.length > 1 ? "Answers " : "Answer";
  const views = singleQ.views > 1 ? "Views" : "View";
  console.log(tags);
  const emptyTag = tags.length == 0 ? true : false;
  return (
    <div className="question-list">
      <div className="c1">
        <span className="view" id="numOfView">
          {singleQ.views} {views}
        </span>
        <span className="answer" id="numOfAns">
          {singleQ.answers.length} {ans}
        </span>
      </div>
      <div className="c2">
        <span className="q-title">
          <a
            href="#"
            id="question-title"
            onClick={() => {
              showAnswers();
              getAnsTitle(singleQ.title);
            }}
          >
            {singleQ.title}
          </a>
          <div className="question-tags">
            {emptyTag
              ? null
              : tags.map((tag, key) => {
                  const tagIndex = parseInt(tag.slice(1)) - 1;
                  const tagName = tagLst[tagIndex].name;
                  return (
                    <div className="tag-child" key={key}>
                      {tagName}
                    </div>
                  );
                })}
          </div>
        </span>
      </div>
      <div className="c3">
        <li className="c3-item user-name-box">
          Asked By <span className="user-name">{singleQ.askedBy}</span>
        </li>
        <li className="c3-item question-date-box">
          On <span className="question-date">{singleQ.askedOn}</span>
        </li>
        <li className="c3-item question-time-box">
          At <span className="question-time">{singleQ.askedAt}</span>
        </li>
      </div>
    </div>
  );
}

export default SingleQ;

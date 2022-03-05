import React from "react";
import "./tagpage.css";
import SingleTag from "./singleTag";
import Nav from "../Nav/Nav";

function TagPage({ model , setAskQuestionFlag }) {
  const title = "All Tags";
  const number =
    model.getTags().length > 1
      ? model.getTags().length + " Tags"
      : model.getTags().length + " Tag";

  const tagLst = model.getTags();

  const getTagQuestions = () => {
    const tagsQuestionDict = {};
    const question_list = model.getQuestions();
    for (var i = 0; i < question_list.length; i++) {
      const tags = question_list[i].tagIds;
      for (var j = 0; j < tags.length; j++) {
        if (!tagsQuestionDict.hasOwnProperty(tags[j])) {
          tagsQuestionDict[tags[j]] = [question_list[i]];
        } else {
          tagsQuestionDict[tags[j]].push(question_list[i]);
        }
      }
    }
    return tagsQuestionDict;
  };
  return (
    <>
      <Nav title={title} number={number}  askQuestionFlag = {setAskQuestionFlag} />
      <div className="tags-page" id="tags_page">
        <div className="tag-box" id="tag_box">
          <div className="sub-tag-box">
            {tagLst.map((tag, key) => {
              const tagsDict = getTagQuestions();
              const info = {
                name: tag.name,
                number: tagsDict[tag.tid].length,
                question: tagsDict[tag.tid]
              };
              return <SingleTag className="tags" info={info} key={key} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TagPage;

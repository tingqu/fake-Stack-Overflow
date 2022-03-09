import React from "react";
import "./tagpage.css";
import SingleTag from "./singleTag";
import Nav from "../Nav/Nav";

function TagPage({ model, onChange, select }) {
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

  const singletTagLst = () => {
    const tagsDict = getTagQuestions();
    const Lst = [];
    for (var i = 0; i < tagLst.length; i++) {
      const info = {
        name: tagLst[i].name,
        number: tagsDict[tagLst[i].tid].length,
        question: tagsDict[tagLst[i].tid],
      };
      Lst.push(<SingleTag info={info} select={select} key={i} />);
    }

    const sperated = [];
    let j = Lst.length / 3;
    let z = 0;
    while (z < j) {
      sperated.push(
        <div className="sub-tag-box" key={z}>
          {Lst.slice(z * 3, z * 3 + 3)}
        </div>
      );
      z += 1;
    }

    const rest = j * 3;
    sperated.push(<div className="sub-tag-box">{Lst[rest]}</div>);
    return sperated;
  };

  const seperatedLst = singletTagLst();

  console.log(seperatedLst);
  return (
    <>
      <Nav title={title} number={number} onChange={onChange} />
      <div className="tags-page" id="tags_page">
        <div className="tag-box" id="tag_box">
          {seperatedLst.map((item, key) => {
            return <div key={key}>{item}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default TagPage;

import React from "react";
import "./singletag.css";

function singleTag({ info }) {
  return (
      <li onClick={() => {
        console.log(info.name);
        console.log(info.question)
      }}>
        <a href="#" id="tags_page_title">
          {info.name}
        </a>
        <p>
          {info.number > 1
            ? info.number + " Questions"
            : info.number + " Question"}
        </p>
      </li>
  );
}

export default singleTag;

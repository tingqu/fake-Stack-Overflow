import React from "react";

function singleTag({ info, select }) {
  return (
    <li
      onClick={() => {
        select([info.question, info.name], 1);
      }}
    >
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

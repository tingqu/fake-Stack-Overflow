import React from 'react'
import './addAnswer.css'

function Addanswer() {
  return (
    <div className= "addAnswer" id="addAnswer">
      <div className="error-ask" id = 'error-ask-answer'>
        <p></p>
        <p></p>
      </div>
      <div>Answer Text</div>
      <textarea name="addAnswerTxt" id="addAnswerTxt" cols="30" rows="10"></textarea>
      <div>Username</div>
      <p>Should not be more than 15 charcaters</p>
      <input type="text" id="answerBy" />
      <button className="post-ans-btn" id="post_answer_btn">Post Answer</button>
    </div>
  )
}

export default Addanswer
import React from 'react'
import './askQuestion.css'

function AskquestionPage() {
  // add error statement

  return (
    <>
    <div className="ask-a-question" id = "ask-a-question" >
      <div className="error-ask" id = 'error-ask'>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <form className="ask-content" id = "ask-content">
        <div className="a1">
          <h1>Question Title</h1>
          <p> Title should not be more than 100 characters</p>
          <input type="text" name="question-title" id="ask-question-title" placeholder="Web scripting invalid syntax URL"/>
        </div>
        <div className="a2">
          <h1>Question Text</h1>
          <p>
            Add details
          </p>
          <textarea rows="500" cols="33"  id="ask-question-text" className="ask-question-text"></textarea>
        </div>
        <div>
          <h1>Tags</h1>
          <p>Add Keywords seperated by whitespaces</p>
          <input type="text" name="ask-tags" id="ask-tags"/>
        </div>
        <div>
          <h1>Username</h1>
          <p>Should not be more than 15 characters</p>
          <input type="text" name="ask-username" id="ask-username" className="ask-username"/>
        </div>
        <div>
          <input type="button" className="post-a-question" id="post-question-button" value = "Post A Question"/>
        </div>
      </form>
    </div>
    </>
  )
}

export default AskquestionPage
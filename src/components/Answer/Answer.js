import React from 'react'
import './answer.css'
import SingleAnswer from './SingleAnswer'


function Answer() {
  return (
    <>
    <div className="question-section" id = " question-section">
        <div className="answer-views" id = "answer-views">11 Views</div>
        <div className="answered-question" id= "answered-question">Dean’s wife was in one of her moods, she had a lot of moods, that girl, and she burst into the party baited for bear. Dean tried to head her off but she went straight over to this good-looking kid in the corner, came right up to him, put her hand on his chest, inside his shirt, and looked up. “Guess what,” she smiled, “it’s your lucky night.” The kid smiled back and asked why. “Because I’m the most beautiful woman you’re ever going to sleep with,” she said, and she would have been too but his mother was there.</div>
        <div className="question-info" id = 'answer-user -info' >
          <div>
          <li className="c3-item user-name-box">Asked By <span className="user-name" id="user-name">Joji John</span></li>
          <li className="c3-item question-date-box">On <span className="question-date" id="question-date"> Jan 19, 2022</span></li>
          <li className="c3-item question-time-box"> At <span className="question-time" id="question-time"> 21:25</span></li>
          </div>
        </div>
    </div>

    {/* Single answer */}
    < SingleAnswer/>
    {/* Add Answer Button */}
    <div className="Answer-question" id = 'Answer_question'>
        <button id="Answer-question-btn">Answer Question</button>
      </div>
    </>
  )
}

export default Answer
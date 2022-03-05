import React, { useState} from 'react'
import './header.css'
import Question from '../Question/Question'
import TagPage from '../Tags/TagPage'
import AskQuestionPage from '../Askquestion/AskquestionPage'

function Header({ model }) {
  const [Question_flag, setQuestion_flag] = useState(false)
  const [Tag_flag, set_Tag_flag] = useState(false)
  const question_lst = model.getQuestions()
  const [askQuestionFlag, setAskQuestionFlag] = useState(false)
  return (
    <>
     <div className="banner" id = "bannerName">
     <ul>
       <li className= { `flex1 ${ Question_flag? "hover_color" : ""}` } id = "Questions" 
        onClick={()=>{
          setQuestion_flag(true)
          set_Tag_flag(false)
        }}>
      <a className="questions"> Questions</a>
      </li>
       <li className= { `flex2 ${  Tag_flag ? "hover_color" : ""}` }id = "tags" onClick={()=>{
           set_Tag_flag(true)
           setQuestion_flag(false)
        }
       }
       ><a href="#" className="tags" id = "tags">Tags</a>
       </li>
       <li className="flex3"><div className="title">Fake Stack Overflow</div></li>
       <li className ="flex4">
         <input type="text" id="search" placeholder="Search ..." 
         onKeyPress={(event) => {
          if (event.key === "Enter") {
            console.log(event.target.value)
            
          }
        }}/>
       </li>
     </ul>
    </div>
   {Question_flag? <Question question_lst={question_lst} model = {model} setAskQuestionFlag = {setAskQuestionFlag} /> : null}
   {Tag_flag? <TagPage model = {model} setAskQuestionFlag = {setAskQuestionFlag}  />: null}
    </>
  )
}

export default Header
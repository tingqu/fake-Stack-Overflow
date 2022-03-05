import React from 'react'
import './nav.css'

function nav({title, number , askQuestionFlag}) {
  return (
    <>
        <div id="nav" className="nav">
          <div className="nav-item" id = "nav-item1">{number}</div>
          <div className="nav-item" id = "nav-item2">{title}</div>
          <button id="ask" type="button" className='ask' onClick={()=>{
            askQuestionFlag(true)
            }}><a href="#" id="askPage" className='askPage'>Ask A Question</a></button>
        </div>
    </>
  )
}

export default nav
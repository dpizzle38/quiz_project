import React from 'react'

const Question = ({question, onAnswer, selectedAnswer, isLocked}) => {
  return (
    <div>
     <h2>{question.question}</h2>
      {question.options.map((option, index)=>(
        <button key={index} onClick={()=>onAnswer(option)} disabled={isLocked} style={{backgroundColor : selectedAnswer === option ? "lightblue": "white"}}>
         {option}
        </button>
      ))}
    </div>
  )
}

export default Question;
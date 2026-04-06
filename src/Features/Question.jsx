import React from 'react'

const Question = ({question, onAnswer, selectedAnswer, isLocked}) => {
  return (
    <div className='space-y-4'>
     <h2 className='text-xl md:text-2xl font-semibold min-h-[60px] mb-4'>
      {question.question}</h2>
      <div className='space-y-2'>
      {question.options.map((option, index)=>(
        <button className= "w-full text-left p-3 border rounded-lg min-h-[45px] hover:bg-blue-100 transition "key={index} onClick={()=>onAnswer(option)} disabled={isLocked} style={{backgroundColor : selectedAnswer === option ? "lightblue": "white"}}>
         {option}
        </button>
        
      ))}
      </div>
    </div>
  )
}

export default Question;
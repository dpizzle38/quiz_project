import React from 'react'

const Question = ({question, onAnswer, selectedAnswer, isLocked}) => {
  return (
    <div className='space-y-4 flex flex-col items-center gap-3'>
     <h2 className='text-xl md:text-2xl font-semibold min-h-[60px] mb-4'>
      {question.question}</h2>
      <div className='space-y-2'>
      {question.options.map((option, index)=>(
        <button className= "w-full max-w-md text-left px-4 py-2 border rounded-lg min-h-[45px] hover:bg-blue-100 transition "key={index} onClick={()=>onAnswer(option)} disabled={isLocked} style={{backgroundColor : selectedAnswer === option ? "lightblue": "white"}}>
         {option}
        </button>
        
      ))}
      </div>
    </div>
    
  )
}

export default Question;
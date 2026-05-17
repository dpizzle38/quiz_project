import React from 'react'

const Question = ({question, onAnswer, selectedAnswer, isLocked}) => {
  return (
    <div className='space-y-4 flex flex-col items-center gap-3'>
     <h2 className='text-xl md:text-2xl font-semibold min-h-[60px] mb-4'>
      {question.question}</h2>
      <div className='space-y-2'>
      {question.options.map((option, index)=>(
       <button
       key={index}
       onClick={() => onAnswer(option)}
       disabled={isLocked}
       className={`
         w-full
         mb-3
         p-3
         rounded-lg
         border
         text-left
         transition-all
         duration-200
     
         ${
           selectedAnswer === option
             ? "bg-blue-500 text-white border-blue-500"
             : `
               bg-white
               text-black
               border-gray-300
               hover:bg-blue-100
     
               dark:bg-gray-700
               dark:text-white
               dark:border-gray-600
               dark:hover:bg-gray-600
             `
         }
       `}
     >
       {option}
     </button> 
        
      ))}
      </div>
    </div>
    
  )
}
// className= "w-full max-w-md text-left px-4 py-2 border rounded-lg min-h-[45px] hover:bg-blue-100 transition"
export default Question;
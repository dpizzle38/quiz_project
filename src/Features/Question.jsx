import React from 'react'

const Question = ({question, onAnswer, selectedAnswer, isLocked}) => {
  return (
    
    <div className="flex flex-col gap-4">

    {/* Question text */}
    <h3 className="text-lg font-semibold text-center">
      {question.question}
    </h3>

    {/* Options */}
    <div className="flex flex-col gap-3">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(option)}
          className= 'w-full text-left px-4 py-2 rounded-lg border transition' style ={{backgroundColor: selectedAnswer === option ? "bg-blue-500 text-white border-blue-500" : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"}}
            
        >
          {option}
        </button>
      ))}
    </div>

  </div>
  )
}

export default Question;
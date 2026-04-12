import React from 'react'

const Result = ({quizzes, answers}) => {
  let score = 0;
  quizzes.forEach((question, index)=>{
      if(answers[index] === question.answer){
        score ++;
      }
  });
  const percentage = Math.round((score/quizzes.length)*100);
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
    <div className='bg-white shadow-lg rounded-2xl p-6 max-w-xl w-full'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Quiz Result</h2>
        <p className="text-center text-lg mb-2">
          Score: <span className="font-bold">{score}</span> / {quizzes.length}
       </p>

        <p className={`text-center text-2xl font-bold mb-4 ${percentage >= 70 ? "text-green-700" : percentage >=40 ? "text-yellow-500" : "text-red-500"}`}>

       Percentage: {percentage}%
        </p>
        <div className='space-y-4'>
        {quizzes.map((question, index)=>
        (
          <div key={question.id} className='p-3 border rounded-lg'>
            <p className='font-semibold'>{question.question}</p>
            <p>Your answer : {answers[index]}</p>
            <p className='text-green-600'>Correct answer : {question.answer}</p>
          </div>
        )
        )}
        </div>
    </div>
    </div>
  )
}

export default Result;
import React from 'react'

const Result = ({quizzes, answers}) => {
  quizzes.forEach((question, index)=>{
      if(answers[index] === question.answer){
        score ++;
      }
  })
  return (
    <div>
        <h2>Quiz Result</h2>
        <p>Score:{score}</p>
        {quizzes.map((question)=>
        (
          <div key={id}>
            <p>{question.question}</p>
            <p>user answer : {answers[index]}</p>
            <p>correct answer : {question.answer}</p>
          </div>
        )
        )}
    </div>
  )
}

export default Result
import React from 'react'

const Result = ({quizzes, answers}) => {
  let score = 0;
  quizzes.forEach((question, index)=>{
      if(answers[index] === question.answer){
        score ++;
      }
  });
  return (
    <div>
        <h2>Quiz Result</h2>
        <p>Score:{score}</p>
        {quizzes.map((question, index)=>
        (
          <div key={question.id}>
            <p>{question.question}</p>
            <p>Your answer : {answers[index]}</p>
            <p>correct answer : {question.answer}</p>
          </div>
        )
        )}
    </div>
  )
}

export default Result;
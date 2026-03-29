import { useState } from 'react'

import './App.css'
import Quizzes from './Features/Quizzes'

function App() {
  const[quizzes, setQuizzes]= useState([
      {id:1,
      question: "What planet is known as the red planet",
      options:["Mars", "Venus", "Saturn", "Jupiter"],
      answer: "Mars"
      },
      {id:2,
       question: "What is the symbol of Gold",
       options : ["Go", "Ag", "Au", "Gu" ],
       answer: "Au" 
      },
      {id:3,
       question: "How many planets do we have",
       options : ["5", "7", "6", "8"],
       answer: "7"
      },
      {id:4,
        question: "What year was the world war ?",
        options: ["1942", "1943", "1944", "1945"],
        answer: "1945"
      }
  ])

  const quizGenerator = (numQuestions= 10) =>{
      const shuffled = [...quizzes].sort(()=> Math.random() -0.5)
      setQuizzes(shuffled.slice(0, numQuestions));
  };

  return (
    <div>
        <Quizzes quizzes={quizzes} onShuffle = {quizGenerator}/>
    </div>
  )
}

export default App

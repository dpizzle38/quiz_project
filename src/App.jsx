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
      { id:4,
        question: "What year was the world war ?",
        options: ["1942", "1943", "1944", "1945"],
        answer: "1945"
      },
      {id:5,
       question: "What is the speed of light ?",
       options: ["299,792km/s", "150,000km/s, 400,000km/s", "200,000km/s"],
       answer: "299,792km/s"
      },
      {id:6,
        question:"What is the largest ocean in the world ?",
        options: ["Atlantic Ocean", "Indian Ocean", "Artic Ocean", "Pacific Ocean"],
        answer: "Mars"
      },
      {id:7,
        question:"What is the capital of France ?",
        options:["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris"
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

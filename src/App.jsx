import { useState } from 'react'

import './App.css'
import Quizzes from './Features/Quizzes'

function App() {
  const[darkmode, setDarkmode] = useState(false);
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
       options: ["299,792km/s", "150,000km/s", "400,000km/s", "200,000km/s"],
       answer: "299,792km/s"
      },
      {id:6,
        question:"What is the largest ocean in the world ?",
        options: ["Atlantic Ocean", "Indian Ocean", "Artic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
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
    <div className={darkmode ? "dark" : ""}>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col transition-colors duration-300">

      {/* 🔹 Navbar */}
      <div className="bg-white dark:bg-gray-800 shadow-md px-6 py-3 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
          Quiz App
        </h1>

        <button
          onClick={() => setDarkmode(!darkmode)}
          className="bg-gray-800 text-white px-3 py-1 rounded"
        >
          🌙
        </button>
      </div>

      
      <div className="flex-1 flex items-center justify-center p-4">
        <Quizzes quizzes={quizzes} onShuffle={quizGenerator} />
      </div>

    </div>

  </div>
    // <div className={darkmode ? "dark":""}>
    // <div className='min-h-screen w-full flex flex-col justify-between min-h-[400px] items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 rounded-2xl'>
    //  <div className='bg-white dark:bg-gray-800 shadow-md px-6 py-3 flex justify-between items-center'>
    //  <h1 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
    //       Quiz App
    //     </h1>
    //   <button className='p-2 m-4 bg-gray-800 text-white rounded' onClick={()=>setDarkmode(!darkmode)}>Toggle Dark Mode</button>
    //   </div>
    //   <div className="flex-1 flex items-center justify-center p-4">
    //     <Quizzes quizzes={quizzes} onShuffle={quizGenerator} />
    //   </div>
    // </div>
    // </div>
  )
}

export default App



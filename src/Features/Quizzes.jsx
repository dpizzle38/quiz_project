import { useEffect, useState } from 'react';
import Question from './Question';
import Result from './Result';

const Quizzes = ({quizzes, onShuffle}) => {
    const[answers, setAnswers] = useState([]);
    const[currentIndex, setCurrentIndex] = useState(0);
    const[screen, setScreen] = useState("start");
    

    const handleAnswer = (option)=>{
      const newAnswers = [...answers]
      newAnswers[currentIndex] = option
      setAnswers(newAnswers);
    }

    const increment = () =>{
        setCurrentIndex(prev => prev + 1)
    };
  
    const decrement = () => {
        setCurrentIndex(prev=>prev - 1)
    };

    const submit = () =>{
        setScreen("result")
    }

    const restartQuiz = () => {
      setAnswers([]);
      setCurrentIndex(0);
      setScreen("start");
      onShuffle();
    };

    if(screen === "result"){
        return <Result quizzes={quizzes} answers={answers} onShuffle={onShuffle}
        restartQuiz={restartQuiz}/>    
        
    }

    if(screen === "howto"){
      return(
        <div>
          <div>
            <h2>How to play</h2>
            <ul>
              <li>Click start quiz to begin</li>
              <li>Select one answer per question</li>
              <li>Use Next/Prev to Navigate</li>
              <li>Submit at the end to see your score</li>
              </ul>
              <button
          onClick={() => setScreen("start")}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Back
        </button>
            
          </div>
        </div>
      )
    }
    

    if (screen === "start") {
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to the Quiz
      </h2>

      <div className="space-y-3">

        <button
          onClick={() => {
            onShuffle();
            setAnswers([]);
            setCurrentIndex(0);
            setScreen("quiz");
          }}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Start Quiz
        </button>

        <button
          onClick={() => setScreen("howto")}
          className="w-full bg-gray-300 py-2 rounded"
        >
          How To Play
        </button>

      </div>
    </div>
  );
}


    if(screen === 'quiz'){
    return (
     <div className='w-full max-w-xl bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-2xl min-h-[400px] flex flex-col justify-between mx-auto p-6'> 
        <div className='mb-6'>
          <p className='text-sm mb-2 text-center'>
            Question {currentIndex + 1} of {quizzes.length}
          </p>
          <div className="w-full  bg-gray-300 dark:bg-gray-700 rounded-full h-2">
            <div className='bg-blue-500 h-2 rounded-full transition-all duration-300' style ={{width : `${((currentIndex + 1)/ quizzes.length) * 100}%`}}>
                
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <Question question={quizzes[currentIndex]}  onAnswer={handleAnswer}
          selectedAnswer ={answers[currentIndex]}/>
         
        </div>
        <div className='mt-6 flex justify-center gap-4'>
          <button disabled={currentIndex === 0} onClick={decrement} className='bg-gray-300 rounded-lg px-4 py-2 disabled:opacity-50'>Prev</button>
          {currentIndex < quizzes.length-1 && <button className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50" onClick={increment} disabled={answers[currentIndex]=== undefined}  >Next</button>}
          {currentIndex === quizzes.length-1 &&<button className='px-4 py-2 bg-green-500 text-white rounded-lg disabled:opacity-50' onClick={()=> setScreen('result')} disabled={answers[currentIndex] === undefined} >Submit</button>}
        </div>
    </div>

  
  )
}
}

export default Quizzes;
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


    if(screen === "result"){
        return <Result quizzes={quizzes} answers={answers}/>    
        
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


    
    return (
     <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'> 
    <div className='w-full max-w-xl flex-1 md:max-w-xl bg-white shadow-lg rounded-2xl p-4 md:p-6'>
    
        <Question question={quizzes[currentIndex]} onAnswer ={handleAnswer} selectedAnswer={answers[currentIndex]}/>
        <div className='space-x-2 space-y-4 mt-6 justify-between'>
        <button className="flex-1 px-4 py-2 bg-gray-300 rounded-lg"  disabled = {currentIndex === 0} onClick={()=>decrement()}>Prev</button>
        {currentIndex < quizzes.length - 1 && 
        <button className='flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg' onClick ={()=> increment()} disabled={answers[currentIndex]=== undefined}>Next</button>}
        {currentIndex === quizzes.length - 1 && <button className="px-4 py-2 bg-green-500 text-white rounded-lg" onClick={submit} disabled={answers[currentIndex]===undefined}>Submit</button>}
        </div>
    </div>
    </div>
  )

}

export default Quizzes;
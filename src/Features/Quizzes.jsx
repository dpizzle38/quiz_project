import { useEffect, useState } from 'react';
import Question from './Question';
import Result from './Result';

const Quizzes = ({quizzes, onShuffle}) => {
    const[answers, setAnswers] = useState([]);
    const[currentIndex, setCurrentIndex] = useState(0);
    const[showResult, setShowResult] = useState(false)
    const[started, setStarted] = useState(false);
    

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
        setShowResult(true)
    }


    if(showResult){
        return <Result quizzes={quizzes} answers={answers}/>    
    }
    
    if(!started){
      return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        <h1 className='text-3xl font-bold mb-4 text-gray-800'>Quiz App</h1>
        <h2 className='text-2xl font-bold mb-4' >Welcome to the Quiz</h2>
        <p className='text-gray-500 mb-6'>Test your knowledge with fun questions</p>
    <button className='w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold' onClick={()=> {onShuffle(); setStarted(true)}}
      
      >Start Quiz</button>
    </div>
    </div>
      )
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
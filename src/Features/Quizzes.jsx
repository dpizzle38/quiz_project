import { useState } from 'react';
import Question from './Question';
import Result from './Result';

const Quizzes = ({quizzes, onShuffle}) => {
    const[answers, setAnswers] = useState([]);
    const[currentIndex, setCurrentIndex] = useState(0);
    const[showResult, setShowResult] = useState(false)

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
  return (
    <div>

        <Question question={quizzes[currentIndex]} onAnswer ={handleAnswer}/>
        {currentIndex < quizzes.length - 1 && 
        <button onClick ={()=> increment()}>Next</button>}
        <button disabled = {currentIndex === 0} onClick={()=>decrement()}>Prev</button>
        <button onClick={()=>onShuffle()}>Shuffle</button>
        <button onClick={()=>submit()}>Submit</button>
    </div>
  )
}

export default Quizzes
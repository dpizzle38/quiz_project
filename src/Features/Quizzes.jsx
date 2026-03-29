import { useState } from 'react';




const Quizzes = ({quizzes, onShuffle}) => {
    const[answers, setAnswers] = useState([]);
    const[currentIndex, setCurrentIndex] = useState(0);
    const[showResult, setShowResult] = useState(false)

    const handleAnswer = (option)=>{
      const newAnswers = [...answers]
      newAnswers[currentIndex] = option
      setAnswers(newAnswers);
    }
  return (
    <div>
        <Question question={quizzes[currentIndex]} onAnswer ={handleAnswer}/>
    </div>
  )
}

export default Quizzes
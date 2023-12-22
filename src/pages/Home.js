// @ts-ignore
import React, { useState } from 'react';
import './Styles.css';



import Navbar from '../components/Navbar';


function Home() {
  //PROPERTIES

  /* let Component
   switch (window.location.pathname) {
     case "/Home":
       Component = <App />
       break;
     case "/About":
       Component = <About />
       break;
     case "/Contact":
       Component = <Contact />
       break;
   }
 
 */





  const [showResult, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "what is the capital city of Ethiopia?",
      options: [
        { id: 0, text: "Adama", isCorrect: false },
        { id: 1, text: "Hawassa", isCorrect: false },
        { id: 2, text: "Addis Ababa", isCorrect: true },
        { id: 3, text: "Axum", isCorrect: false }
      ],
    },
    {
      text: "which African country is successfully defend colonization?",
      options: [
        { id: 0, text: "Egypt", isCorrect: false },
        { id: 1, text: "Ethiopia", isCorrect: true },
        { id: 2, text: "Somalia", isCorrect: false },
        { id: 3, text: "Kenya", isCorrect: false }
      ],
    },
    {
      text: "which planet is the largest?",
      options: [
        { id: 0, text: "Venus", isCorrect: false },
        { id: 1, text: "Mars", isCorrect: false },
        { id: 2, text: "Earth", isCorrect: false },
        { id: 3, text: "Jupitor", isCorrect: true }
      ],
    },
    {
      text: "which one has no alternative?",
      options: [
        { id: 0, text: "war", isCorrect: false },
        { id: 1, text: "rape", isCorrect: false },
        { id: 2, text: "peace", isCorrect: true },
        { id: 3, text: "murder", isCorrect: false }
      ],
    },

    {
      text: "who is the current prime minister of Ethiopia? ",
      options: [
        { id: 0, text: "Emmanuel Macron", isCorrect: false },
        { id: 1, text: "Thomas Sankra", isCorrect: false },
        { id: 2, text: "Abiy A Ali", isCorrect: true },
        { id: 3, text: "none", isCorrect: false }
      ],
    }

  ]

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    }
    else {
      setResult(true);
    }
  }
  const retake = () => {
    setScore(0);
    setCurrentQuestion(0);
    setResult(false);
  }
  return (







    <div className="Home">


      <Navbar />












      <h1>GENERAL QUIZ</h1>

      {/*current score*/}
      <h2>Current Score: {score}</h2>
      {showResult ? (
        <div className='result'>
          <h1>Your Result</h1>
          <h2>{score} out of {questions.length} correct -({(score / questions.length) * 100}%)
          </h2>
          <button className='btn1' onClick={() => retake()}>Reset </button>
        </div>
      ) : (

        /*question*/
        <div className='quiz-card'>
          <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className='question'>{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li className='link1' onClick={() => optionClicked(option.isCorrect)} key={option.id}> {option.text}</li>
              );
            })}
          </ul>
        </div>
      )}

    </div>


  );
}
export default Home;

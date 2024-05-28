import React, { useState } from "react";
import ErrMessage from "../Error/ErrMessage";
import { useNavigate } from "react-router-dom";

const QuestionCard = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
 
  

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "`select`";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleQuit = () => {
    setCurrentQuestion(0);
    setQuestions();
    navigate('/');
  };

  const handleNext = () => {
    if (currentQuestion > 3) {
      navigate("/score");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  return (
    <div className="flex items-center justify-center h-auto px-[1.5rem] ">
      <div className="border-2 border-yellow-400   mx-auto  max-sm:border-0 w-full sm:w-[600px] md:w-[700px] xl:w-[980px]">
        <h1 className="border-b-2 border-yellow-400 px-4 py-1 sm:py-2 text-white text-xl sm:text-3xl">
          Question :{" "}
          <span className="text-yellow-400">{currentQuestion + 1} </span>
        </h1>
        <h2 className=" text-[1rem] sm:text-lg md:text-2xl px-2 sm:px-4 py-2 sm:py-4 text-white">
          {questions[currentQuestion].question}
        </h2>
        <div className="grid  sm:grid-cols-2 grid-cols-1 gap-2 sm:gap-2 md:gap-4 place-content-center place-items-center mx-6 my-2 md:mx-8 md:my-8">
          {error && <ErrMessage>{error}</ErrMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`custom-btn px-[0.5rem] py-[0.5rem] sm:px-[1rem] sm:py-[1rem] w-full p-1  text-white  ${
                  selected && handleSelect(i)
                }`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
                
              >
                {i}
              </button>
            ))}
        </div>
        <div className="flex text-sm items-center justify-around gap-16 mx-10 my-8">
            <button className="w-full text-white bg-red-600  p-2 md:p-4 font-extrabold" onClick={() => handleQuit()}>Quit</button>
            <button className="w-full text-white bg-green-600 p-2 md:p-4 font-extrabold" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

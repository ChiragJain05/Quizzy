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
    if (selected === i && selected === correct) return "select";
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
    <div className="flex items-center justify-center h-full">
      <div className="border-2 border-yellow-400 w-full  mx-32  max-sm:border-0 max-sm:mx-2">
        <h1 className="border-b-2 border-yellow-400 px-4 py-2 text-white text-3xl">
          Question :{" "}
          <span className="text-yellow-400">{currentQuestion + 1} </span>
        </h1>
        <h2 className="text-3xl px-4 py-4 text-white">
          {questions[currentQuestion].question}
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 place-content-center place-items-center mx-8 my-8">
          {error && <ErrMessage>{error}</ErrMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`custom-btn w-full  text-white my-2 ${
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
        <div className="flex items-center justify-around gap-16 mx-10 my-8">
            <button className="w-full text-white bg-red-600  p-4 font-extrabold" onClick={() => handleQuit()}>Quit</button>
            <button className="w-full text-white bg-green-600 p-4 font-extrabold" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

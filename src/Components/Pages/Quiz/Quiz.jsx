import React from "react";
import { useState, useEffect } from "react";
import Loader from "../../Loader/Loader";
import QuestionCard from "../../QuestionCard/QuestionCard";
import { useNavigate } from "react-router-dom";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [currentQuestion, questions]);

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mx-4 mt-2 py-4 px-4">
        <h1 className="text-2xl  text-white border-b-2 border-yellow-400  ">
          Welcome, <span className="text-yellow-400">{name}</span>
        </h1>

        <h1 className="text-white">
          Score : <span className="text-yellow-400"> {score}</span>
        </h1>
      </div>
      <div className="h-full">
        {questions ? (
          <>
            <QuestionCard 
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              questions={questions}
              options={options}
              correct={questions[currentQuestion]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Quiz;

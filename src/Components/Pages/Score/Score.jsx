import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Score = ({ name, score ,setScore }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, []);

  const HandleFinish =() => {
    setScore(0);
    navigate("/");
  }
  return (
    <div className="flex flex-col gap-8 items-center justify-evenly h-full py-8">
    <h1 className="text-4xl text-white p-4">
      Thanks for playing, <span className="text-yellow-400">{name}</span>
    </h1>
    <div className="flex-grow flex flex-col items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl">
          Final Score: <span className="text-yellow-400">{score}</span>
        </h1>
        <div className="text-2xl mt-4 space-y-2">
          <h1>
            -> Correct Answers: <span className="text-green-600">{score}</span>
          </h1>
          <h1>
            -> Incorrect Answers: <span className="text-red-600">{5 - score}</span>
          </h1>
          <h1>
            -> Total Questions: <span className="text-yellow-400">5</span>
          </h1>
        </div>
      </div>
    </div>
    <div className="mb-8">
      <button className="custom-btn" onClick={HandleFinish}>Go To Home</button>
    </div>
  </div>
  );
};

export default Score;

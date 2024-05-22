import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Score = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-evenly h-full">
      <h1 className="text-4xl text-white  p-4">
        Thanks for playing , <span className="text-yellow-400"> {name}</span>
      </h1>
      <div className="">
        <div className="mt-10 text-white">
          <h1 className="text-4xl">
            Final Score : <span className="text-yellow-400"> {score}</span>
          </h1>
          <div className="text-2xl mt-4">
            <h1>
              -> correct Answers : <span className="text-green-600">{score}</span>
            </h1>
            <h1>
              -> Incorrect Answers :{" "}
              <span className="text-red-600">{5 - score}</span>
            </h1>
            <h1>
              -> total Question : <span className="text-yellow-400">5</span>
            </h1>
          </div>
        </div>
      </div>
      <div>
        <button className="custom-btn" onClick={()=>navigate('/')}>Go To Home</button>
      </div>
    </div>
  );
};

export default Score;

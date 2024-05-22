import React, { useState } from "react";
import ErrMessage from '../../Error/ErrMessage';
import { useNavigate } from "react-router-dom";

const Home = ({ name, setName, fetchQuestions}) => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = () => {
    if (!name) {
      setErr(true);
      return;
    }
    else{
      setErr(false);
      fetchQuestions();
      navigate('/quiz');
    }
  };
  return (
    <div className="flex flex-col items-center justify-evenly h-full custom-bg mx-8 border-r-2 border-l-2 border-yellow-400 ">
      <div>
        <h1 className="text-center text-white text-5xl drop-shadow-sm py-4  [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-yellow-500">
          It is a Reactjs based quiz Website.
        </h1>
      </div>
      {err && <ErrMessage>please enter your name to continue</ErrMessage>}
      <div>
        <input
          type="text"
          placeholder="Enter your name "
          className="pr-1 sm:pr-8 pl-2 py-4 custom-ip-field"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
          <button className="p-4 text-white custom-btn " onClick={handleSubmit}>
            Play Now
          </button>
      </div>
    </div>
  );
};

export default Home;

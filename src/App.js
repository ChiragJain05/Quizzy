import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Pages/Home/Home'
import Quiz from './Components/Pages/Quiz/Quiz'
import Score from './Components/Pages/Score/Score'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import axios from 'axios';

function App() {

  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async() => {
    const { data } = await axios.get("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple");
    setQuestions(data.results);
  }

  return (
    <BrowserRouter>
      <div className='bg-purple-900 border-yellow-400 border-4 flex flex-col  h-screen '>
        <Header />
        <div className='h-4/5'>
          <Routes>
            <Route path='/' element={
              <Home 
                name={name} 
                setName={setName} 
                fetchQuestions ={fetchQuestions} 
              />
            } />
            <Route path='/quiz' element={
              <Quiz 
                name={name}
                questions={questions}
                setQuestions={setQuestions}
                score={score}
                setScore={setScore}
              />
            } />
            <Route path='/score' element={<Score name={name} score={score} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

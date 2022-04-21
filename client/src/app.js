import Settings from './Components/Settings';
import Input from './components/Input'
import Questions from './Components/Question';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'



function App() {

  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  let component

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Questions />
  } else if (!questions.length) {
    component = <Settings />
  } else {
    component = <FinalScreen />
  }
  return (
      // <Routes>
      //   <Route path="/" element={ <Settings />}/>
      //   <Route path="/users" element={ <Input />}/>
      //   <Route path="/quiz" element={<Questions />}/>
      // </Routes>
      <div className="App">
      <div className="app-container">{component}</div>
      </div>
  );
}

export default App;

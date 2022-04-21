import Settings from './pages/Settings';
// import Input from './components/Input'
import FinalScreen from './pages/FinalScreen'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import '../src/app'
import Questions from './pages/Question';



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
    
      <Routes>
        <Route path="/" element={ <Settings />}/>
        <Route path='/questions' element={<Questions />} />
        {/* <Route path="/users" element={ <Input />}/> */}
        {/* <Route path="/scores" element={ <FinalScreen/>} /> */}
      </Routes>
     
  );
}

export default App;

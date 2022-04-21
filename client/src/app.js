import Settings from './pages/Settings';
// import Input from './components/Input'
import FinalScreen from './pages/FinalScreen'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import '../src/app'
import Questions from './pages/Question';



function App() {
  return (
    
      <Routes>
        <Route path="/" element={ <Settings />}/>
        <Route path='/questions' element={<Questions />} />
        {/* <Route path="/users" element={ <Input />}/> */}
        <Route path="/score" element={ <FinalScreen/>} />
      </Routes>
     
  );
}

export default App;

import Settings from './pages/Settings';
import Input from './components/Input'
// import FinalScreen from './pages/FinalScreen'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import '../src/app'



function App() {
  return (
    
      <Routes>
        <Route path="/" exact element={ <Settings />}/>
        <Route path="/users" element={ <Input />}/>
        {/* <Route path="/scores" element={ <FinalScreen/>} /> */}
      </Routes>
     
  );
}

export default App;

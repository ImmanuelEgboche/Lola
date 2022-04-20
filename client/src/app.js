import Settings from './Components/Settings';
import Input from './components/Input'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import '../src/app'



function App() {
  return (
      <Routes>
        <Route path="/" element={ <Settings />}/>
        <Route path="/users" element={ <Input />}/>
      </Routes>
  );
}

export default App;

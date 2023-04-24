import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormData from './components/FormData';
import Navbar from './components/Navbar';
import './App.css';
// import Users from './components/Users';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<FormData/>}></Route>
        <Route path="/add" element={<Form/>}></Route>
        <Route path="/list" element={<FormData/>}></Route>

      </Routes>
   
      
      
      </BrowserRouter>
      {/* <Users/> */}
      
    </div>
  );
}

export default App;

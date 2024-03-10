import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './About';
import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;



import React from 'react';
import './App.css'; 
import logo1 from '../src/imgs/Logo.png'
import logo2 from '../src/imgs/png logo.png'
import CountDown from './components/CountDown/CountDown'
function App() {
  return (
    <div className="app-container">
    <div className="logo-container">
      <img src={logo2} alt="logo2" className="logo1" />
      <img src={logo1} alt="logo1" className="logo2" />
    
      </div>
      <div className="text-container">
      <h1 className='centered-text'>Class 2024 - 11 oct 6Am</h1>
      <div className='centered-text'>اسرة مارمينا الهندسية</div>

      <br />
      <div className='centeredCountDown' style={{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)",borderRadius:20}}><CountDown/></div>
      <br />
      <div style={{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)",borderRadius:20,marginRight:"25px"}} >SOOOOOOOOOOON</div>
      </div>
      
    </div>
  );
}

export default App;

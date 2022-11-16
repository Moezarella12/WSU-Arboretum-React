import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function sayHello() {
  window.location.href = " https://www.winona.edu/m/arboretum/";
  }

function showTours(){
    window.location.href = "https://www.winona.edu/m/arboretum/thememap.asp?t=1";
}
function HeroSection() {
  return (
    <div className='hero-container'>
 
            <video src='/videos/TreeVid.mp4' autoPlay loop muted />
     
      <h1>ADVENTURE AWAITS</h1>
      <p>WSU ARBIRITUM</p>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={sayHello}
        >
          CATALOGUE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={showTours}
        >
          TAKE A TOUR 
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;
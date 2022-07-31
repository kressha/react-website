import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/pexels-kindel-media-7578547.mp4' autoPlay loop muted/>
        <h1>Real Estate</h1>
        <p>Discover your dream home!</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Subscribe</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'><i className='fa-solid fa-magnifying-glass'/>View Properties</Button>
        </div>
    </div>
  )
}

export default HeroSection;
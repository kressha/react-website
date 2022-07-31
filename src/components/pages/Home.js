import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';

function Home () {
    return(
        <>
            <HeroSection/>
            <Cards/>
            <ImageSlider slides={SliderData} />
        </>
    )
}

export default Home;
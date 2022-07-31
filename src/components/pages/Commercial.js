import React from 'react';
import '../../App.css';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';

export default function Commercial() {
  return <ImageSlider slides={SliderData} />;
}
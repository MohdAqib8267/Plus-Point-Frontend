import React from 'react'
import './HomeTestMod.css'
import TestSlider from './TestSlider/TestSlider'
import TestSliderMod from './TestSlider/TestSliderMod'
export default function HomeTestMod() {
  return (
    <>
     <div className="main-homeTestMod xyz">
         <div className="homeTestMod-title">Customer Reviews</div>
         <div className="homeTestMod-info">Voices of Trust: Hear directly from our clients about their exceptional experiences with us</div>
         <div className="homeTestMod-content">
         <TestSliderMod />
         </div>
     </div>
    </>
  )
}
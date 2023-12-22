import React from 'react'
import './HomeTestMod.css'
import TestSlider from './TestSlider/TestSlider'
export default function HomeTestMod() {
  return (
    <>
     <div className="main-homeTestMod xyz">
         <div className="homeTestMod-title">Customer Reviews</div>
         <div className="homeTestMod-info">Here, we lay the foundation of something special. The precision & quality of our diversified range of products is down to our brilliant manufacturing unit.</div>
         <div className="homeTestMod-content">
                <TestSlider />
         </div>
     </div>
    </>
  )
}
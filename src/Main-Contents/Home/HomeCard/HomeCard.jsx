import React, { useState } from 'react'
import './HomeCard.css'
import trust from '../../../images/white.png'
import progression from '../../../images/homeWh-2.png'
import quality from '../../../images/homeWh-3.png'

export default function HomeCard(props) {
  const [white,setWhite]=useState(false);
  const changeImg = ()=>{
      setWhite(true);
  }
  const reset = ()=>{
      setWhite(false);
  }

  return (
    <>
      <div className="main-homeCard xyz" onMouseOver={changeImg} onMouseLeave={reset}>
         <img src={white?props.id==1?trust:props.id==2?progression:quality:props.img} alt="" className="homeCard-img" />
         <h1 className="homeCard-title">{props.title}</h1>
         <p className="homeCard-info">{props.info}</p>
      </div>
    </>
  )
}

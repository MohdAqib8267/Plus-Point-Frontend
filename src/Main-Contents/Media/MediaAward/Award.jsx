import React from 'react'
import vector1 from '../../../images/media-vector1.svg'
import vector2 from '../../../images/media-vector2.svg'

export default function Award() {
  return (
    <>
      <div className="main-award">
           <div className="award-title">AWARDS</div>
           <div className="award-info">Indexcellence award 2023 Indexcellence award 2023 award</div>
           <div className="awards-row1">
           <div className="media-content-3-award">
                         <img src={vector1} alt="" />
                         <p>PLUS POINT BUILDSWARE <br />
                              PVT. LTD. <br />
                              <span>Indexcellence award 2023</span>
                         </p>
                         <img src={vector2} alt="" />
                    </div>
                    <div className="media-content-3-award">
                         <img src={vector1} alt="" />
                         <p>BEST DOOR & HARDWARE <br />
                             & ACCESSORIES<br />
                              <span>Award by ABP News 2018-19</span>
                         </p>
                         <img src={vector2} alt="" />
                    </div>
           </div>
      </div>
    </>
  )
}
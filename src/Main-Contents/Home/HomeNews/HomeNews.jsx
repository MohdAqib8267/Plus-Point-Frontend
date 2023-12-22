import React from 'react'
import './HomeNews.css';
import homeNews1 from '../../../images/homeNews-1.png';
import homeNews2 from '../../../images/homeNews-2.png';
import homeNews3 from '../../../images/homeNews-3.png';
export default function HomeNews() {
  return (
    <>
         <div className="main-homeNews xyz">
          <div className="homeNews-title">
          Blogs
          </div>
          <div className="homeNews-para">
          Here, we lay the foundation of something special. The precision & quality of our diversified range of products is down to our brilliant manufacturing unit.
          </div>
          <div className="homeNews-contents">
                <div className="homeNews-content">
                    <img src={homeNews1} alt="" />
                     <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p> 
                </div>
                <div className="homeNews-content">
                    <img src={homeNews2} alt="" />
                     <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p> 
                </div>
                <div className="homeNews-content">
                    <img src={homeNews3} alt="" />
                     <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p> 
                </div>
          </div>
      </div>
    </>
  )
}

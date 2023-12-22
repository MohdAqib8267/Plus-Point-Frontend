import React ,{useState} from 'react'
import './Form3.css';
import rightImg from "../../../images/contact-img.png";
import arrow from '../../../images/contact-arrow.svg';
import mapImg from '../../../images/contactMap.png';
import resImg from '../../../images/contRes.png';
import {BsTelephone} from 'react-icons/bs';
import {TfiEmail} from "react-icons/tfi";
import {CiLocationOn} from 'react-icons/ci';
import {MapContainer, TileLayer,Marker} from 'react-leaflet'
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css';
import locationImg from '../../../images/location.png';

export default function Form3(props) {
  const setName = (e)=>{
    props.setUserData(userData => ({
      ...userData,
      name:e.target.value
  }))
  }
  const setNum = (e)=>{
    props.setUserData(userData => ({
      ...userData,
      number:e.target.value
  }))
  }
  const setEmail = (e)=>{
    props.setUserData(userData => ({
      ...userData,
      email:e.target.value
  }))
  }
  const setMsg = (e)=>{
    props.setUserData(userData => ({
      ...userData,
      msg:e.target.value
  }))
  }

  const [centre,setCentre] = useState({lat:28.5692,lng:77.2886});
  const Zoom=12;
  const customIcon = new Icon({
    iconUrl:locationImg,
    iconSize:[38,38]
  })

  return (
    <>
    <div className="form-3" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <div className="main-form3">
              <div className="form3-wrapper">
                 <div className="form3-left">
                   <div className="form3-left-content">
                        <div className="form3-left-title">
                           <span> <img src={arrow} onClick={()=>{props.setI(1)}} /> </span> Get in Touch
                        </div>
                        <div className="form3-left-info"> Fill out this small form to help us know you better</div>
                         <input type="text" placeholder='Full Name' required onChange={setName} />
                         <input type="number" placeholder='Phone Number' required onChange={setNum} />
                         <input type="email" placeholder='Email' required onChange={setEmail}/>
                         <div className="form3-msg">Message*</div>
                         <textarea name="Message" id="" onChange={setMsg} ></textarea>
                         <button type='submit' className='form3-left-btn' onClick={()=>{
                          console.log(props.userData);
                         }}>Continue</button>
                         <div className="form-filler">
                            <div className="form-bgColor" style={{width:"90%"}}></div>
                         </div>
                   </div>
                 </div>
                 <div className="form3-right">
                   <img src={rightImg} alt="" />
                 </div>
              </div>
           </div>
            
            <div className="formMapContainer">
              <div className="form3-map-left">
                  <div className="form3-map-title">Dealer Locator</div>
                  <div className="form3-map-search">
                     <input type="text" placeholder='Pincode' />
                     <button className="map-btn">Find</button>
                  </div>
                  <div className="form3-map-result">
                      <div className="map-res-left">
                        <img src={resImg} alt="" />
                      </div>
                      <div className="map-res-right">
                        <div className="map-res-title">Mr. XYZ CHANDRA</div>
                        <div className="map-res-info">Lorem Ipsum Lorem Ipsum</div>
                        <div className="map-res-ph"> <span><BsTelephone /></span> +91 7819927621</div>
                        <div className="map-res-mail"> <span> <TfiEmail /> </span>Xyzchandra@gmail.com</div>
                        <div className="map-res-adr"> <span> <CiLocationOn /> </span>Sector 19 block A, Noida</div>
                      </div>
                  </div>
                  <div className="form3-map-result">
                      <div className="map-res-left">
                        <img src={resImg} alt="" />
                      </div>
                      <div className="map-res-right">
                        <div className="map-res-title">Mr. XYZ CHANDRA</div>
                        <div className="map-res-info">Lorem Ipsum Lorem Ipsum</div>
                        <div className="map-res-ph"> <span><BsTelephone /></span> +91 7819927621</div>
                        <div className="map-res-mail"> <span> <TfiEmail /> </span>Xyzchandra@gmail.com</div>
                        <div className="map-res-adr"> <span> <CiLocationOn /> </span>Sector 19 block A, Noida</div>
                      </div>
                  </div>
              </div>
              <div className="form3-map-right">
                {/* <img src={mapImg} alt="" /> */}
                <MapContainer
                 center = {centre}
                 zoom = {Zoom}
                >
                  <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
                  {
                    <Marker position={centre} icon={customIcon} />
                  }
                </MapContainer>
              </div>
            </div>
      </div>
    </>
  )
}
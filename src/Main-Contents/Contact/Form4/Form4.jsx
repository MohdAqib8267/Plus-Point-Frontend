import React,{useState} from 'react'
import resImg from '../../../images/contRes.png';
import {BsTelephone} from 'react-icons/bs';
import {TfiEmail} from "react-icons/tfi";
import {CiLocationOn} from 'react-icons/ci';
import {MapContainer, TileLayer,Marker} from 'react-leaflet'
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css';
import locationImg from '../../../images/location.png';

export default function Form4() {

    const [centre,setCentre] = useState({lat:28.5692,lng:77.2886});
  const Zoom=12;
  const customIcon = new Icon({
    iconUrl:locationImg,
    iconSize:[38,38]
  })

  return (
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
  )
}
import React ,{useState} from 'react'
import './Form3.css';
import rightImg from "../../../images/contact-img.png";
import arrow from '../../../images/contact-arrow.svg';

export default function Form3(props) {

  const [name,setNam]=useState("");
  const [ph,setPh]=useState("");
  const [email,setEmai]=useState("");

  const setName = (e)=>{
    setNam(e.target.value);

    props.setUserData(userData => ({
      ...userData,
      name:e.target.value
  }))
  }
  const setNum = (e)=>{
    setPh(e.target.value);

    props.setUserData(userData => ({
      ...userData,
      number:e.target.value
  }))
  }
  const setEmail = (e)=>{
    setEmai(e.target.value);

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

  const handleForm = ()=>{
      console.log(name,ph,email);
        if((name!="" && ph!="" && email!="") === true)
        props.setI(3);
        else
        alert("Please fill all required data");
  }

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
                            handleForm();
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
            
      </div>
    </>
  )
}
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PCard.css'
export default function PCard(props) {
  // console.log(props);

  const navigate = useNavigate();
  const ImgURL="http://localhost:1337"
  const navigator = ()=>{
    const htmlContent = props?.item?.attributes?.Title;

    // Create a temporary element
    const tempElement = document.createElement('div');
    
    // Set innerHTML to the HTML content
    tempElement.innerHTML = htmlContent;
    
    // Access the innerText property to get only the text
    const textContent = tempElement.innerText;
    
      switch(textContent){
        case "Mortise Lock Set": navigate("/products/mortoise");
        break;
        case "Aldrop Door Kits": navigate("/products/aldrop");
        break;
        case "Pull Handles": navigate("/products/pullhandles");
        break;
        case "Main Door Lock Sets": navigate("/products/maindoor");
        break;
        case "Door Locks & Latches": navigate("/products/locks&latches");
        break;
        case "Hinges": navigate("/products/hinges");
        break;
        case "Furniture Lock & Accessories": navigate("/products/furniturelock");
        break;
        case "Decoratives": navigate("/products/decoratives");
        break;
        case "Door Accessories": navigate("/products/doorAccessories");
      }
     
console.log(textContent);
      
  }
  return (
    <>
     <div className="main-Pcard" 
      onClick={navigator}
     >
         {/* <img src={props.img} alt="" /> */}
         <img src={`${ImgURL}${props?.item?.attributes?.Image?.data?.attributes?.url}`} alt="" />
         <div className="Pcard-title" style={props.i===5?{padding:"0 2rem"}:{}}>
         <div dangerouslySetInnerHTML={{ __html: props?.item?.attributes?.Title}} />
          </div>

        
     </div>
    </>
  )
}
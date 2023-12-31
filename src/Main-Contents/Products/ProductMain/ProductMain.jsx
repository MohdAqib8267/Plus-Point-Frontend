import React, { useEffect, useState } from 'react'
import './ProductMain.css'
import Header from '../../Header/Header'
import PCard from '../PCard/PCard'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import img1 from '../../../images/prod-1.jpg'
import img2 from '../../../images/prod-2.jpg'
import img3 from '../../../images/prod-3.jpg'
import img4 from '../../../images/prod-4.png'
import img5 from '../../../images/prod-5.jpg'
import img6 from '../../../images/prod-6.png'
import img7 from '../../../images/prod-7.jpg'
import img8 from '../../../images/prod-8.jpg'
import img9 from '../../../images/prod-9.jpg'
import axios from 'axios';
export default function ProductMain() {

    const img=[img1,img2,img3,img4,img5,img6,img7,img8,img9];
    const title=["Mortise Lock Set","Aldrop Door Kits","Pull Handles","Main Door Lock Sets","Door Locks & Latches",`Door Hinges & Control system`,`Furniture Lock & Accessories`,"Decoratives","Door Accessories"];

    const [products,setProducts]=useState(' ');
    const [productItems,setProductItems]=useState(' ');
    useEffect(()=>{
        const baseURL = process.env.REACT_APP_API_URL|| "http://localhost:1337/api/";
        const token = "be70dee855404872b42db9f5550afe676ce5884958a904658fb1e8377071abe9fa038b9431bd4d21fe0b35024762f58082b96f6facb806cbd1038a280ddba9fe52f134786c8aec42e991206ef01f081fa1a309631359f89b5ae7a2d98387e4b3d7dcb07e33a81dc141f7335e5119af17f8dc03ac3fda185a01e6d66b36949152"
   
     const headers = {
       Authorization: `Bearer ${token}`,
     };
        const fetchProducts=async()=>{
            const res = await axios.get(`${baseURL}products?populate=*`,{
                headers:headers,
            });
          console.log(res.data.data);
         setProducts(res?.data?.data[0]?.attributes);  
        }
        const fetchProductItems=async()=>{
            const res = await axios.get(`${baseURL}products?populate[product_items][populate]=*`,{
                headers:headers,
            });
        //   console.log(res.data.data);
         setProductItems(res?.data?.data[0]?.attributes?.product_items?.data);
        }
        fetchProducts();
        fetchProductItems();

    },[])
    // console.log(productItems);

  return (
    <>
       <Header />
       <div className="productMain">
              <div className="productMain-banner">
                   {/* <div className="productMain-banner-title">Discover the Plus Point Difference</div> */}
                   <div dangerouslySetInnerHTML={{ __html: products.Heading}} />
              </div>
              <div className="productMain-info">
                   {/* <div className="productMain-title">End to End Hardware Solution</div>
                   <div className="productMain-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.</div> */}

                    <div dangerouslySetInnerHTML={{ __html: products.Sub_Heading}} />
              </div>
              <div className="productMain-images">
                 {Array.isArray(productItems) && productItems?.map((val,i)=>{
                    return <PCard item={val} key={i}/>
                 })}
              </div>
       </div>
       <PreFooter />
       <Footer />
    </>
  )
}
import React from 'react'
import './ProductPhone.css'
import sort from '../../../images/sort-two.svg'
import {AiOutlineDown} from 'react-icons/ai';
import img1 from '../../../images/prod-3.jpg'
function ProductPhone(props) {

    const img=[1,2,3,4,5,6,7,8,9];

  return (
    <>
      <div className="main-productPhone">
          <div className="productPhone-top">
                {/* <div className="productPhone-top-wrapper">
                       <img src={sort} alt="" />
                       <div className="productPhone-top-title">Sort by</div>
                       <AiOutlineDown />
                </div> */}
                <div className="productPhone-top-m-wrapper">
                    <img src={sort} alt="" />
                    <select name="sort by" id="sort"className='productPhone-top-wrapper'>
                   <option value="SortBy">Sort By</option>
                   <option value="Affordability">Affordability</option>
                   <option value="Style">Style</option>
                   <option value="Material">Material</option>
                </select>
                </div>



          </div>
          <div className="productPhone-bottom">
                {
                    props.imgArr.map((val,i)=>{
                        return(
                            <img src={props.img} alt="" />
                        )
                    })
                }
          </div>
      </div>
    </>
  )
}

export default ProductPhone
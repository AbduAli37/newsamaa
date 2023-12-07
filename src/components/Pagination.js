import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Pagination = ({originalProducts,number,handlechangecurrentpage,currentpage}) => {
  function rend(){
    let allNumbers=[];
    for(let i=0;i<(originalProducts.length*1)/number;i++){
      allNumbers.push(i);
    }
    return allNumbers;
  }
  return (
    <div className='pagination'>
      <div onClick={()=>{
            if(currentpage*1+1>1){
              handlechangecurrentpage(currentpage*1-1)
            }
            }} className="prev">
      <AiOutlineLeft

      />
      </div>
      <div className="numbers">
      {
        rend().map((item,index)=>{
          return <span onClick={()=>{
            handlechangecurrentpage(item)
          }} className={currentpage==item?'paginationelement active':'paginationelement'}>{item+1}</span>
        })
      }
      </div>
      <div onClick={()=>{
        if(currentpage<(originalProducts.length*1)/number*1-1){
          handlechangecurrentpage(currentpage*1+1)
        }
          }} className="next">
      <AiOutlineLeft

      />
      </div>
    </div>
  )
}

export default Pagination

import React, { useState } from 'react'

const ImageCard = ({x,i,setbookmarkimage}) => {
function showHoverBookmark(){
    // console.log("im hovered")
    sethovered(true)
}
function hideHoverBookmark(){
    // console.log("im hovered")
    sethovered(false)
}
const [hovered,sethovered]=useState(false)
  return (
    <div className={`${String(i).split("")[String(i).length-1]==3?"column-layout image-container large":"image-container"}`} onMouseEnter={() =>showHoverBookmark()}
    onMouseLeave={()=>hideHoverBookmark()}
  key={i}>
      <img
        alt={x?.description}
        onClick={(e) => setbookmarkimage(e)}
        src={x.links.download}
      />
      {hovered &&
        <div className='hover-icon'>🔖</div>
      }
      
    </div>
  );
}

export default ImageCard
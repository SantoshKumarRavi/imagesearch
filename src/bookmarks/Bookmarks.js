import React, { useState } from 'react'

const Bookmarks = ({bookmark}) => {
const[showBookmark,setShowBookmark]=useState(false)
function setBookmarkstatus(){
    setShowBookmark((prev)=>!prev)
}
  return (
    <div >
        <input type={"submit"} onClick={()=>setBookmarkstatus()} value="Bookmarks"/>
       
        {
          showBookmark && 
          <div className='bookmark-container-wrapper'>
              {
                   bookmark?.data?.map((x,i)=>{
                    return (<div key={i} className='bookmark-container'>
                          <img alt={"bookmark-images"} src={x}/>
                      </div>)
                  })
              }

          </div>
        }
    </div>
  )
}

export default Bookmarks
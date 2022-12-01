import React, { useState } from 'react'

const Input = ({searchquery,setSearchquery}) => {
const[searchText,setSearchText]=useState("")
function updateState(e){
    setSearchText(e?.target?.value)
    // console.log(e?.target?.value)
}
function updateSearch(){
    console.log("searcjed  ==> ",searchText)
    setSearchquery(()=>searchText)
}
  return (
    <div className='input-container'>
        <input type={"text"} onChange={(e)=>updateState(e)}/>
        <input type={"submit"} onClick={()=>updateSearch()}/>
    </div>
  )
}

export default Input
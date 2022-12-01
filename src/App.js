// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ImageSearch from './imagesearch/ImageSearch';
import Bookmarks from './bookmarks/Bookmarks';
import Input from './input/Input';
function App() {
  const[bookmark,setBookmark]=useState({})
  const[searchquery,setSearchquery]=useState("")
  const [images,setImages]=useState({})

  return (
    <div className="App">
      <div className='header-wrapper'>
      <h2>React Photo Search</h2>
      <Bookmarks bookmark={bookmark}/>
      </div>
    <Input searchquery={searchquery} setSearchquery={setSearchquery}/>
    <ImageSearch images={images} setImages={setImages} searchquery={searchquery} bookmark={bookmark} setBookmark={setBookmark}/>
    </div>
  );
}

export default App;

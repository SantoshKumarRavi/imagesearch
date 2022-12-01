import React, { useEffect, useState } from 'react'
import { createApi } from 'unsplash-js';
import ImageCard from '../imageCard/ImageCard';

const ImageSearch = ({setBookmark,bookmark,searchquery,images,setImages}) => {
const unsplash = createApi({ accessKey: 'jOzr5TpO922mp8FFSAj1temgsypkrl2-98PAxFo4SmM' });
// non-feed example search.getPhotos
function setbookmarkimage(e){
    if(bookmark?.data){
        let updated=[...bookmark.data]
        updated.push(e?.target?.src)
        setBookmark(()=>{
            return {
                data:updated
            }
          })
    }else{
        setBookmark(()=>{
            return {
                data:[e?.target?.src]
            }
          })
    }
}
useEffect(()=>{
    unsplash.search.getPhotos({   query:searchquery,
    page: 1,
    perPage: 20
}).then(result => {
        if (result.errors) {
          console.log('error occurred: ', result.errors[0]);
        } else {
          const photo = result?.response;
          console.log(("fetched",photo.results));
          setImages((prev)=>{
            return {
                data:photo.results
            }
          })
        }
      });
},[searchquery])

  return (
    <div className='image-container-wrapper'>
        {images?.data?.map((x,i)=>{ 
            return <ImageCard key={i} setbookmarkimage={setbookmarkimage} i={i} x={x}/>
        })
        }
    </div>
  )
}

export default ImageSearch
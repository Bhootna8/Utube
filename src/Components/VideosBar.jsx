
import { resultContext } from '@/app/Contexts/Store';
import Link from 'next/link';
import React, { useContext } from 'react'

const VideosBar = ({video}) => {
 
  const {searchTerm, videos, setSearchTerm} = useContext(resultContext)

 
  setSearchTerm(video?.snippet?.title)

  return (
    <div className=' videos-bar flex flex-col items-center overflow-y-auto scrollbar-hide'>
         {videos.map(item=> (
       
             <img src={item?.snippet?.thumbnails?.high?.url} className=' w-full min-h-[300px]' alt="" />
          
         ))}
    </div>
  )
}

export default VideosBar
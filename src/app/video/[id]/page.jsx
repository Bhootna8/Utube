"use client"

import Header from '@/Components/Header'
import VideoArea from '@/Components/VideoArea'
import VideosBar from '@/Components/VideosBar'
import React, { useContext} from 'react'
import { useParams } from 'next/navigation'
import { resultContext } from '@/app/Contexts/Store'

const page = () => {
  const videoId = useParams()
  const {videos, searchTerm, setSearchTerm} = useContext(resultContext)

  const video = videos?.find((e)=> e.id.videoId===videoId.id)
  console.log(video)

  return (
    <div className='h-screen grid-container2'>
        <Header/>
        <VideosBar video = {video}/>
        <VideoArea video = {video}/>
    </div>
  )
}

export default page
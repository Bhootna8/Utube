"use client"

import React, {useContext} from 'react'
import Image from 'next/image'
import { resultContext } from '@/app/Contexts/Store'
import Link from 'next/link'
import spinner from '../../public/spinner.svg'
import { useInView} from 'react-intersection-observer'


const MainContent = () => {
const {searchTerm, setSearchTerm, datas, setPageToken, videos} = useContext(resultContext)
console.log(searchTerm)

  const {ref, inView} = useInView()

  if(inView) {
    setPageToken(datas?.nextPageToken)
  }

  setTimeout(()=> {
  document.getElementById('next-page-line').style.display="block";
  }, 5000)

  return (
    <div className=' main-content overflow-y-auto py-5 flex flex-wrap w-full justify-evenly'>
        {videos?.map((item, index)=> (
            <div key={index} className=' w-[300px]  mx-auto my-4'>
             <Link href={`/video/${item?.id?.videoId}`} >
              <div className=' w-[300px] h-[300px]'>
                <img src={item?.snippet?.thumbnails?.high?.url} className=' w-[100%] min-h-[100%]' alt="" />
              </div>
            
              <p>{item?.snippet?.title}</p>
             </Link> 
            </div>
        ))}

        <div className=' flex items-center flex-col w-full'>
          <Image alt='loading' src={spinner} className=' mx-auto' width={"auto"} height={80}></Image>
          <div ref={ref} className=' hidden w-full h-10 bg-white' id='next-page-line'></div>
        </div>
    </div>
  )
}

export default MainContent
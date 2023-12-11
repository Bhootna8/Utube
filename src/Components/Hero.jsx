import React, {useContext, useState} from 'react'
import { heroData } from '@/HeroData'
import { resultContext } from '@/app/Contexts/Store'
import Link from 'next/link'

const Hero = () => {
  const {searchTerm, setSearchTerm} = useContext(resultContext)

  
  return (
    <div className=' flex pl-5 items-center whitespace-nowrap overflow-x-auto scroll-smooth scrollbar-hide'>
         {heroData.map(data=> (
            <Link href={`search/${data}`}>
              <p onClick={()=> setSearchTerm(data)} className=' px-[12px] bg-[#4a4a4a89] cursor-pointer hover:bg-[#585858cf] rounded-[10px] py-1 text-xl mx-2'>
              {data}
              </p>
            </Link>
         ))}
    </div>
  )
}

export default Hero
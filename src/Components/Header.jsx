import Link from 'next/link'
import React, { useContext } from 'react'

import { Search, Mic, CameraEnhanceOutlined, Notifications, AccountCircle, YouTube } from '@mui/icons-material'
import {Stack} from '@mui/material'
import { resultContext } from '@/app/Contexts/Store'


const Header = () => {
const {searchTerm, setSearchTerm, videos} = useContext(resultContext)

const searchVideo = (event)=> {
event.preventDefault()
 const searchValue= document.getElementById('searchbar').value;
     setSearchTerm(searchValue)
}

  return (
    <div className=' header w-full [&>*]:h-[40px] h-[60px] flex flex-wrap items-center '>
        <YouTube className=' cursor-pointer text-[red] text-[2rem] ml-10'/>
        <h1 className=' text-[2rem] cursor-pointer mr-auto ml-1'>Youtube</h1>
         <form onSubmit={(e)=> searchVideo(e)} className=' flex items-center ml-auto mr-3 bg-[#58585875] border-[1px] rounded-full border-[#727272be]'>
         <input type="text" spellCheck="false" placeholder=' Search...' id='searchbar' className=' w-[400px] h-full bg-black px-3 text-xl rounded-tl-full rounded-bl-full outline-none  border-r-[1px] border-gray-600' />
             <button type='submit' className=''> <Search className=' text-3xl cursor-pointer mx-4' /></button>
         </form>
        <Mic className=' w-[40px] p-1 cursor-pointer bg-[#58585875] mr-auto rounded-full '/>
        <CameraEnhanceOutlined className=' cursor-pointer ml-auto mr-3'/>
        <Notifications className='mr-3 cursor-pointer '/>
        <AccountCircle className=' cursor-pointer md:mr-[100px] text-3xl'/>
    </div>
  )
}

export default Header
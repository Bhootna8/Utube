import React from 'react'
import { sideBarData } from '@/SideBarData'

const SideBar = () => {
  return (
    <div className=' sidebar pb-5 overflow-y-auto scrollbar-hide'>
        {sideBarData.map(data=> (
          <p className=' pl-5 ml-auto rounded-[15px] py-2 w-[180px] hover:bg-[red] cursor-pointer [&>*]:mr-2  '>{data.icon} {data.name}</p>
        ))}
    </div>
  )
}

export default SideBar
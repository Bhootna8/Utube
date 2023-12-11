import React from 'react'


const VideoArea = ({video}) => {
  return (
     <div className=' video-area overflow-y-auto scrollbar-hide'>
        <div className=' w-[80%] ml-auto mr-10 my-5'> 
          <iframe src={`https://www.youtube.com/embed/${video?.id?.videoId}`} className='w-full h-[500px]' frameBorder="0"></iframe>
          <p className=''>{video?.snippet?.title}</p>
        </div>
        <div className=' text-2xl flex items-center px-10 mt-10 justify-between'>
              <h2>{video?.snippet?.channelTitle}</h2>
              <button className=' hover:bg-[#d1d0d0] bg-[#aba9a9] text-[#363535] rounded-[10px] px-2'>Subscribe</button>
        </div>
    </div>
  )
}

export default VideoArea
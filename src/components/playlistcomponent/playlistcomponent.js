import React from 'react'
import musicbar from '../../img/Z23N.gif'
function Playlistcomponent({playing,cover,song,artist,time}) {
  return (
    <div className='grid grid-cols-[8%,15%,auto,20%] gap-3 w-[90%] m-auto'>
       {playing? <div className='self-center'>
        <img src={musicbar} width={15} height={15} alt="gif"/>
       </div>:<div></div>}
        <div className='self-center'>
            <img src={cover} alt='img' width={50} height={50} className=' rounded-sm'/>
        </div>
        <div className='self-center'>
            <div className='text-sm text-gray-50 w-full overflow-hidden h-5 block'>{song}</div>
            <div className='text-xs text-gray-100 w-full overflow-ellipsis'>{artist}</div>
        </div>
        <div className='self-center text-xs text-gray-100'>{time}</div>
    </div>
  )
}

export default Playlistcomponent
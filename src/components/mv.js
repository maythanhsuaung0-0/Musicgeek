import React from 'react'

function Mv({playlist}) {
  return (
    <div className='relative shrink-0 w-28 h-32 md:w-40 md:h-44 lg:w-48 lg:h-52'>
        <img src={playlist.cover} alt="cover" width={100} height={100} className="rounded-sm w-full h-full top-0 left-0 absolute z-0"/>
        <div className='z-3 absolute left-2 bottom-2'>
            <h3 className='text-sm text-gray-100'>{playlist.ttl}</h3>
            <h4 className='text-xs text-gray-400'>{playlist.artist}</h4>
        </div>
    </div>

  )
}
// 
export default Mv
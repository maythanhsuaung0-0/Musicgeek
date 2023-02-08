import React from 'react'

function Album(e) {
  return (
    <div className=''>
        <img className=' rounded-md self-center block ' src={e.song.album} alt='image' width={120} height={120}/>
        <h2 className='text-gray-100 text-xs py-2'>{e.song.artist}</h2>
    </div>
  )
}

export default Album
import React from 'react'

function Album({playlist}) {
  return (
    <div className='grid gap-1 shrink-0 '>
        <img src={playlist.cover} alt={'img'} width={100} height={100} className='rounded-sm'/>
        <h3 className='text-sm text-gray-100'>{playlist.ttl}</h3>
        <span className='text-xs text-gray-400'>{playlist.artist}</span>
    </div>
  )
}

export default Album
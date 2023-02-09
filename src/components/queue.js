import React from 'react'
import musicbar from '../img/Z23N.jpg'
function Queue({cover,ttl,artist,time}) {
  return (
    <div className='grid grid-cols-[5%,10%,auto,15%]'>
        <div className='self-center'>
            <img src={musicbar} alt={'playing'} width={20} height={20}/>
        </div>
        <div  className='self-center'>
        <img src={cover} alt={'album'} width={50} height={50} className='rounded-md'/>
        </div>
        <div className='grid gap-1'>
            <h3 className='text-sm self-center text-gray-100'>{ttl}</h3>
            <span className='text-xs self-center text-gray-400'>{artist}</span>
        </div>
        <div className='self-center text-gray-400 text-xs'>{time}</div>
    </div>
  )
}

export default Queue
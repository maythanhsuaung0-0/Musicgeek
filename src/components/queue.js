import React from 'react'
import musicbar from '../img/Z23N.gif'
function Queue({playing,cover,ttl,artist,time}) {
  return (
    <div className='grid grid-cols-[5%,15%,auto,15%] 2xl:grid-cols-[8%,15%,auto,15%] gap-3 2xl:gap-5'>
        <div className='self-center'>
            {playing && <img src={musicbar} alt={'playing'} width={20} height={20}/>}
        </div>
        <div  className='self-center'>
        <img src={cover} alt={'album'} width={50} height={50} className='rounded-md'/>
        </div>
        <div className='grid gap-1'>
            <h3 className='text-sm self-center text-gray-100'>{ttl.length>13?ttl.slice(0,13).concat('...'):ttl}</h3>
            <span className='text-xs self-center text-gray-400'>{artist}</span>
        </div>
        <div className='self-center text-gray-400 text-xs'>{time}</div>
    </div>
  )
}

export default Queue
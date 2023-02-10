import React from 'react'
import clsx from 'clsx'
function Playlistdata({head,id,cover,ttl,artist,album,time}) {
  console.log(ttl.slice(0,13))
  return (
    <div className={clsx('w-full grid grid-cols-[5%,8%,25%,25%,20%,17%] py-2 lg:px-3 px-1  gap-1 2xl:gap-2 leading-6 rounded-md',head?'text-white font-semibold text-sm md:text-md':'bg-ebony text-gray-100 text-xs md:text-sm')}>
        <div className='self-center text-center '>{id}</div>
        <div className='self-center flex justify-center'>
            {cover && <img src={cover} alt={'cover'} width={40} height={40} className="rounded-sm"/>}
        </div>
        <div className='overflow-hidden h-6 self-center text-center '>{ttl.length>13?ttl.slice(0,13).concat('...'):ttl}</div>
        <div className='self-center text-center '>{artist.length>13?artist.slice(0,13).concat('...'):artist}</div>
        <div className='self-center text-center '>{album.length>13?album.slice(0,13).concat('...'):album}</div>
        <div className='self-center text-center '>{time}</div>
    </div>
  )
}

export default Playlistdata
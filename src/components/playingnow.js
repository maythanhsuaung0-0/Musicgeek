import React from 'react'
import {RxDotFilled} from 'react-icons/rx'
import {FaPlay} from 'react-icons/fa'
import {CgClose} from 'react-icons/cg'
function Playingnow({cover,ttl,singer,next}) {
  return (
    <>
    <div className='hidden md:grid absolute left-0 bottom-0 z-10 w-full md:h-[10vh] lg:h-[18vh] bg-ebony shadow-md border-solid border-t-2 border-t-gray-900 grid-cols-[5%,20%,auto,10%] gap-4 px-3 lg:px-10 py-3'>
        <div className='self-center flex justify-center'>
            <img src={cover} alt='cover' width={60} height={60} className='rounded-sm w-full'/>
        </div>
        <div className='grid gap-2 self-center'>
            <div className='text-gray-100 text-sm'>{ttl}</div>
            <div className='text-gray-400 text-xs'>{singer}</div>
        </div>
        <div className='bg-red-100'></div>
        <div className=' self-center w-fit m-auto'>
            <div className='flex gap-1'><span className='self-center text-blue-500'><RxDotFilled/></span><span className='text-xs text-gray-400 self-center'>Next Play</span></div>
            <div className='text-sm text-gray-100'>{next}</div>
        </div>
    </div>
    <div className='lg:hidden grid grid-cols-[15%,auto,8%,8%] bg-ebony gap-2 absolute left-0 bottom-0 z-10'>
        <div>   
            <img src={cover} alt='cover' width={80} height={80} className='w-full h-full'/>
        </div>
        <div className='grid gap-2 self-center'>
            <div className='text-gray-100 text-sm'>{ttl.length>30?ttl.slice(0,30).concat('...'):ttl}</div>
            <div className='text-gray-400 text-xs'>{singer}</div>
        </div>
        <div className='self-center text-gray-100 text-md'>
            <FaPlay/>
        </div>
        <div className='self-center text-gray-100 text-md'>
            <CgClose/>
        </div>
    </div>
    </>
  )
}

export default Playingnow
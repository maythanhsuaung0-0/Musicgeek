import React from 'react'
import {BsChevronLeft} from 'react-icons/bs'
import Queue from './queue'
import songs from '../data/songs'
import {MdExpandMore} from 'react-icons/md'
function Rightsidebar() {
  return (
    <div className='grid gap-3 2xl:gap-5 py-5 2xl:py-8 '>
        <div className=' w-[90%] ml-auto flex gap-4 text-gray-50'><div className='self-center text-xl font-semibold'><BsChevronLeft/></div><div className='self-center text-xl'>Play Queue</div></div>
        <div className=' w-[90%] ml-auto flex gap-2 bg-gray-700 text-gray-100 rounded-sm p-2 2xl:py-3 2xl:px-4 text-sm'><span className='self-center'>01</span><h4 className='self-center'>Country Music</h4></div>
        <div className='grid gap-3 2xl:gap-5  w-[90%] m-auto'>
          {songs.map((e,i)=><Queue cover={e.url} ttl={e.ttl} artist={e.singer} time={e.time} playing={e.playing}/>)}
        </div>
        <button className='flex gap-1 text-gray-100 justify-center self-center text-xs cursor-pointer'>Show All <span className='self-center'><MdExpandMore/></span> </button>
    </div>
  )
}

export default Rightsidebar
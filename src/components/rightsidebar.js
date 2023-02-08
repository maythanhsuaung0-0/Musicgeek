import React from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import Playlistcomponent from './playlistcomponent/playlistcomponent'
import lalisa from '../img/lalisa.jpg'
function Rightsidebar() {
  return (
    <div className=' flex flex-col gap-5'>
        <div className='flex flex-row gap-3 text-gray-50 w-[80%] ml-auto'>
            <div className='self-center'><AiOutlineLeft/></div><div className=' text-lg font-semibold self-center'>Play Queue</div>
        </div>
        <div className='text-gray-100 bg-gray-600 py-2 px-2 w-[80%] ml-auto text-sm'><span className='mr-3'>01</span><span>Country Music</span></div>
        {/* playlist */}
        <div className='grid gap-3'>
            <Playlistcomponent playing={true} cover={lalisa} song={'LALISA'} artist={'Lisa'} time={'03:20'}/>
            <Playlistcomponent playing={false} cover={lalisa} song={'We are never ever getting back together'} artist={'Lisa'} time={'03:20'}/>
            <Playlistcomponent playing={false} cover={lalisa} song={'LALISA'} artist={'Lisa'} time={'03:20'}/>
            <Playlistcomponent playing={false} cover={lalisa} song={'LALISA'} artist={'Lisa'} time={'03:20'}/>
            <Playlistcomponent playing={false} cover={lalisa} song={'LALISA'} artist={'Lisa'} time={'03:20'}/>
            <Playlistcomponent playing={false} cover={lalisa} song={'LALISA'} artist={'Lisa'} time={'03:20'}/>
        </div>
    </div>
  )
}

export default Rightsidebar
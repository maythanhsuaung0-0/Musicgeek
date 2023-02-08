import React from 'react'
import Profile from './profile'
import {BiHomeAlt,BiMusic} from 'react-icons/bi'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {IoIosAddCircleOutline} from 'react-icons/io'
function Leftsidebar() {
  return (
    <div className=' text-white py-8 flex flex-col gap-10'>
        <Profile/>
        <div className=' flex flex-col gap-2'>
            <ul className='text-center'>
                <li className='flex flex-row gap-3 hover:bg-gray-600 px-10 py-2 cursor-pointer
                '><div className='self-center'><BiHomeAlt/></div><span className=' uppercase text-gray-50 text-sm'>Your zone</span></li>
                <li className='flex flex-row gap-3 hover:bg-gray-600 px-10 py-2 cursor-pointer
                '><div className='self-center'><BiMusic/></div><span className=' uppercase text-gray-50 text-sm'>Music</span></li>
                <li className='flex flex-row gap-3 hover:bg-gray-600 px-10 py-2 cursor-pointer
                '><div className='self-center'><MdOutlineFavoriteBorder/></div><span className=' uppercase text-gray-50 text-sm'>Liked</span></li>
            </ul>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-1 justify-center'><span>Your List</span><span className='self-center'><IoIosAddCircleOutline/></span></div>
            <div>
                <ul className=' list-disc'>
                    <li className='hover:bg-gray-600 px-10 py-2 cursor-pointer text-sm'>Country Music</li>
                    <li className='hover:bg-gray-600 px-10 py-2 cursor-pointer text-sm'>Jazz Music</li>
                    <li className='hover:bg-gray-600 px-10 py-2 cursor-pointer text-sm'>K pop</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Leftsidebar
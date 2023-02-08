import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineSetting} from 'react-icons/ai'
function Nav() {
  return (
    <div className=' bg-ebony  w-full z-30'>
        <ul className='w-[80%] h-16  mx-auto flex flex-row gap-2 px-4'>
            <li className=' self-center'><div className='font-bold text-white'>MusicGeeks'</div></li>
            <li className='m-auto self-center  rounded-md'>
            <div className=' p-2 px-4  bg-mirage bg-opacity-50 rounded-full  flex gap-2'>
                    <div className='self-center cursor-pointer text-gray-50'><BiSearch/></div>
                    <input type="text" className=' w-48 outline-none bg-transparent text-gray-50 text-sm'/>
            </div></li>
            <li className='ml-auto self-center  rounded-md'><div className='p-2 text-white cursor-pointer'><HiOutlineMail/></div></li>
            <li className=' self-center  rounded-md'><div className='p-2 text-white cursor-pointer'><AiOutlineSetting/></div></li>
        </ul>
    </div>
  )
}

export default Nav
import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineSetting} from 'react-icons/ai'
import pf from '../img/1989.jpg'
function Navbar() {
  return (
    <div className='w-full bg-ebony text-white'>
        <div className='w-[90%] lg:w-[80%] m-auto flex flex-row gap-5 py-3'>
            <h1 className='self-center cursor-pointer'>Musicgeeks</h1>
        {/* hide in mobile */}
        <div className=' hidden md:flex md:self-center md:flex-row md:gap-2 md:bg-mirage px-2 py-1 md:m-auto md:rounded-full'>
           <div className='self-center'> <BiSearch/></div>
           <input type={'text'} className=" bg-transparent outline-none"/>
        </div>
        {/* hide in large screens */}
        <div className=' md:hidden ml-auto self-center cursor-pointer'>
            <BiSearch/>
        </div>
        <div className='self-center cursor-pointer md:ml-auto'>
            <HiOutlineMail/>
        </div>
        <div className='self-center cursor-pointer'>
            <AiOutlineSetting/>
        </div>
        {/* hide in large screens */}
        <div className='md:hidden self-center cursor-pointer'>
            <img src={pf} alt="profile" width={30} height={30} className=" rounded-full"/>
        </div>
    </div>
    </div>
  )
}

export default Navbar
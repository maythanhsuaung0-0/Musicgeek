import React from 'react'
import pf from '../img/1989.jpg'
function Profile() {
  return (
   <div className='flex w-full justify-center'>
     <div className=' flex flex-row gap-4'>
        <img src={pf} alt='profile' width={80} height={80} className='rounded-full'/>
        <div className='flex flex-col gap-2'>
            <div>Rachel</div>
            <span className=' text-xs border-solid border-2 border-blue-400 px-1 py-1 rounded-md'>Premium</span>
        </div>
    </div>
   </div>
  )
}

export default Profile
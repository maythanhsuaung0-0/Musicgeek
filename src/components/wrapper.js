import React from 'react'
import Leftsidebar from './leftsidebar'
import Middlesection from './middlesection'
import Rightsidebar from './rightsidebar'

function Wrapper() {
  return (
    <div className='lg:grid lg:grid-cols-[20%,auto,20%]'> 
        <div className=' hidden lg:block'>
          <Leftsidebar/>
        </div>
        <div className=' bg-mirage'>
          <Middlesection/>
        </div>
        <div className=' hidden lg:block'>
          <Rightsidebar/>
        </div>
    </div>
  )
}

export default Wrapper
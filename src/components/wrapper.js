import React from 'react'
import Leftsidebar from './leftsidebar'
import Main from './main'
import Rightsidebar from './rightsidebar'

function Wrapper() {
  return (
    <div className=' grid grid-cols-[20%,auto,20%]'>
      <Leftsidebar/>
      <Main/>
      <Rightsidebar/>
    </div>
  )
}

export default Wrapper
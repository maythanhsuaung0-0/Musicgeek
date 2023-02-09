import React from 'react'
import {RxDotFilled} from 'react-icons/rx'
function Listelement({name,count}) {
  return (
    <div className='flex gap-3'><span className='self-center text-blue-500'><RxDotFilled/></span><span>{name}</span><span className='text-gray-400'>{count}</span></div>
  )
}

export default Listelement
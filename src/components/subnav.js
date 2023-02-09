import React from 'react'

function Subnav({adj,name,btn}) {
  return (
    <div className='flex flex-row'>
        <div className='self-center grid gap-1'>
            <span className='text-sm text-gray-100'>{adj}</span>
            <h2 className='text-xl text-white font-semibold'>{name}</h2>
        </div>
        {btn && <button className='ml-auto text-blue-500 text-sm self-center cursor-pointer'>See Other</button>}
    </div>
  )
}

export default Subnav
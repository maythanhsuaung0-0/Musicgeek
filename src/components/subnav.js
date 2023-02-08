import React from 'react'

function SubNavbar(data) {
  return (
    <div className='flex flex-row px-8 pb-4'>
    <div><span className=' text-gray-100 text-sm'>{data.adj}</span><br/> <span className=' font-bold text-lg text-white'>{data.ttl}</span></div> 
    {data.btn && <div className=' text-blue-400 ml-auto text-sm self-center'>See others</div>}
</div>
  )
}

export default SubNavbar
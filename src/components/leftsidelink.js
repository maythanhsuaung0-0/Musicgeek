import React from 'react'
import clsx from 'clsx'
function LeftsideLink({icon,name,active}) {
  return (
    <div className={clsx('flex flex-row gap-3 py-1 pl-10 pr-2  hover:bg-gray-700',active && 'border-l-4 border-l-red-500 border-solid bg-gray-700 ')}>
      <div className={clsx('self-center',active?'text-gray-100':'text-gray-400')}>{icon}</div>
      <div className={clsx('self-center text-sm uppercase', active?'text-gray-100':'text-gray-400')}>{name}</div>
    </div>
  )
}

export default LeftsideLink
import React from 'react'
import Subnav from './subnav'
import data from '../data/data';
import Album from './album';
import Mv from './mv';
import Playlist from './playlist';
function Middlesection() {
  return (
    <div className='py-5 2xl:py-8 grid gap-6 2xl:gap-10 w-[90%] m-auto h-[90vh] 2xl:h-[92vh] scrollbar-hide overflow-auto'>
        <div>
            <Subnav adj={'Featured'} name={'Albums'} btn={true}/>
            <div className='mt-5 flex gap-3 2xl:gap-5 overflow-x-auto scrollbar-hide'>
                {data.map((e,i)=><Album playlist={e} key={i}/>)}     
            </div>
            
            </div>
        <div className=' flex flex-col-reverse lg:grid lg:grid-cols-[70%,30%] gap-6 2xl:gap-10'>
            <div className='grid gap-4'>
                <Subnav adj={'Popular'} name={'New Releases For You'} btn={true}/>
                <div className=' lg:h-[30vh] 2xl:h-[50vh] overflow-y-auto overflow-x-hidden custom-scrollbar'>
                    <Playlist/>
                </div>
            </div>
            <div className='grid gap-4'>
                <Subnav adj={'Hot'} name={'Mv'}/>
                <div className='flex flex-row gap-3 2xl:gap-5 overflow-x-auto lg:grid lg:gap-3 lg:justify-center lg:h-[30vh] 2xl:h-[50vh] overflow-y-auto scrollbar-hide'>
                {data.map((e,i)=><Mv playlist={e} key={i}/>)}     
            </div>
            </div>
        </div>
    </div>
  )
}

export default Middlesection
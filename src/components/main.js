import React from 'react'
import Slide from './myslide/slide'
import SubNavbar from './subnav'
import adele from '../img/adele.jpg'
import MusicChart from './musicChart'
function Main() {
  return (
    <div className='bg-mirage py-5 grid gap-3'>
       <div>
       <SubNavbar adj={'Featured'} ttl={'Albums'} btn={true} />
        <Slide/>
       </div>
        <div className=' grid grid-cols-[70%,auto]'>
          <div>
            <SubNavbar adj={"Popular"} ttl={'New Releases For You'} btn={true}/>
            <MusicChart/>
          </div>
          <div>
            <SubNavbar adj={'Hot'} ttl={'MV'} btn={false}/>
           <div className='px-8 grid gap-3 h-52 overflow-auto scrollbar-hide'>
           <img src={adele} alt='image' className='w-full rounded-md' width={100} height={100}/>
           <img src={adele} alt='image' className='w-full rounded-md' width={100} height={100}/>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Main
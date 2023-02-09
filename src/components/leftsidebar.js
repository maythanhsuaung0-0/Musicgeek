import React from 'react'
import pf from '../img/adele.jpg'
import {FiHome} from 'react-icons/fi'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {MdOutlineFavoriteBorder,MdExpandMore} from 'react-icons/md'
import {RxVideo} from 'react-icons/rx'
import {AiOutlineLine} from 'react-icons/ai'
import {IoMdAddCircleOutline} from 'react-icons/io'
import LeftsideLink from './leftsidelink'
import Listelement from './listelement'
function Leftsidebar() {
  return (
    <div className='grid gap-8 2xl:gap-14'>
        <div className='flex flex-row gap-3 justify-center'>
            <img src={pf} alt="profile" width={60} height={60} className="rounded-full self-center"/>
            <div className=' self-center grid gap-1'>
                <div className='font-semibold text-gray-100'>Susan</div>
                <div className=' border-2 border-solid border-blue-500 rounded-md text-xs text-blue-500 p-1'>Premium</div>
            </div>
        </div>
        <div className='grid gap-1 2xl:gap-3'>
            <LeftsideLink icon={<FiHome/>} name={'Your Zone'} active={true}/>
            <LeftsideLink icon={<BsMusicNoteBeamed/>} name={'Music'}/>
            <LeftsideLink icon={<MdOutlineFavoriteBorder/>} name={'Liked'}/>
            <LeftsideLink icon={<RxVideo/>} name={'Mv'}/>
        </div>
        <div className='grid gap-4'>
            <div className='flex flex-row gap-1 text-blue-500 justify-center'><div className='text-lg self-center'><AiOutlineLine/></div><span className='text-xs'>Your List</span><div className='text-lg self-center'><AiOutlineLine/></div>
            <IoMdAddCircleOutline/>
            </div>
            <div className=' max-h-60 overflow-auto scrollbar-hide'>
                <div className='text-gray-100 text-sm grid gap-3 justify-center px-2'>
                    <Listelement name={"Country's Music"} count={'20'}/>
                    <Listelement name={"The Jazz Music"} count={'20'}/>
                    <Listelement name={"The Classical Music"} count={'20'}/>
                    <Listelement name={"Kpop"} count={'20'}/>
                    
                    
                </div>
            </div>
            <button className='flex gap-1 text-gray-100 justify-center self-center text-xs cursor-pointer'>Show All <span className='self-center'><MdExpandMore/></span> </button>
        </div>
    </div>
  )
}

export default Leftsidebar
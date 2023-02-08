import React from 'react'
import Taylor from '../img/1989.jpg'
function MusicChart() {
  return (
    <div className='px-8 text-gray-100 '>
        
            {/* thead */}
            <div className='grid grid-cols-[5%,12%,25%,25%,25%,8%] rounded-md font-semibold px-3 pb-2 '>
            <div></div>
            <div></div>
            <div>Title</div>
            <div>Artist</div>
            <div>Album</div>
            <div></div>
            </div>
            {/* tbody */}
           
           <div className=' h-36 overflow-auto scrollbar-hide grid gap-4'>
             {/* tr */}
             <div className='grid grid-cols-[5%,12%,25%,25%,25%,8%] rounded-md bg-ebony px-3 py-4 text-sm'>
            <div className=" self-center">01</div>
            <div className=" self-center">
                <img src={Taylor} alt="img" width={30} height={30} className="rounded-sm"/>
            </div>
            <div className=" self-center">Style</div>
            <div className=" self-center">Taylor Swift</div>
            <div className=" self-center">Red</div>
            <div className=" self-center">1:23</div>
            </div>
            {/* tr */}
            <div className='grid grid-cols-[5%,12%,25%,25%,25%,8%] rounded-md bg-ebony px-3 py-4 text-sm'>
            <div className=" self-center">01</div>
            <div className=" self-center">
                <img src={Taylor} alt="img" width={30} height={30} className="rounded-sm"/>
            </div>
            <div className=" self-center">Style</div>
            <div className=" self-center">Taylor Swift</div>
            <div className=" self-center">Red</div>
            <div className=" self-center">1:23</div>
            </div>
             {/* tr */}
             <div className='grid grid-cols-[5%,12%,25%,25%,25%,8%] rounded-md bg-ebony px-3 py-4 text-sm'>
            <div className=" self-center">01</div>
            <div className=" self-center">
                <img src={Taylor} alt="img" width={30} height={30} className="rounded-sm"/>
            </div>
            <div className=" self-center">Style</div>
            <div className=" self-center">Taylor Swift</div>
            <div className=" self-center">Red</div>
            <div className=" self-center">1:23</div>
            </div>
             {/* tr */}
             <div className='grid grid-cols-[5%,12%,25%,25%,25%,8%] rounded-md bg-ebony px-3 py-4 text-sm'>
            <div className=" self-center">01</div>
            <div className=" self-center">
                <img src={Taylor} alt="img" width={30} height={30} className="rounded-sm"/>
            </div>
            <div className=" self-center">Style</div>
            <div className=" self-center">Taylor Swift</div>
            <div className=" self-center">Red</div>
            <div className=" self-center">1:23</div>
            </div>
       
           </div>

    </div>
  )
}

export default MusicChart
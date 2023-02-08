import React from 'react'
import Album from './album'
import images from './staticdata'

import Slider from 'react-slick'
function Slide() {
  const settings={
    dots:true,
    slidesToShow:5,
    slidesToScroll:1,
    
}
return (
<div>
    <Slider {...settings}>
  {images.map((e,i)=>  <div><Album song={e} key={i}/></div>)}
    </Slider>
</div>

  )
}

export default Slide
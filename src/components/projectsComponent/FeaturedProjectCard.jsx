import React from 'react'
import FeaturedProjectPicture from './FeaturedProjectPicture'
import FeaturedDetails from './FeaturedDetails'

const FeaturedProjectCard = (props) => {
    let aligndir = "text-end";
    if (props.flexdir === "flex-row-reverse") { aligndir = "text-start" }
  return (
    <div className={'flex mt-[50px] justify-between w-[70vw] gap-6 items-center' + props.flexdir}>
        <FeaturedProjectPicture/>
        <FeaturedDetails aligndir={aligndir}/>
    </div>
  )
}

export default FeaturedProjectCard
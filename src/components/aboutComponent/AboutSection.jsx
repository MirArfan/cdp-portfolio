import React from 'react'
import AboutHeader from '../globalComponent/SectionHeader'
import AboutDetais from './AboutDetais'
import AboutPicture from './AboutPicture'

const AboutSection = () => {
    return (
        <section className="flex flex-col items-center  bg-gray-100 " >
             <AboutHeader sectionHeading="About me"/>
            <div className=" flex justify-between container w-[70vw] flex-row items-center mt-[50px] mb-[120px]">
               
                <AboutDetais />
                <AboutPicture/>
            </div>
        </section >
    )
}

export default AboutSection
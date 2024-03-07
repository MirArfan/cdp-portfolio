import React from 'react'
import NavBar from '../components/navComponent/navBar'
import Hero from '../components/heroComponent/Hero'
import AboutHeader from '../components/globalComponent/SectionHeader'
import AboutSection from '../components/aboutComponent/AboutSection'

const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <AboutSection/>
    </div>
  )
}

export default HomePage
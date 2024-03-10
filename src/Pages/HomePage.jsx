import React from 'react'
import NavBar from '../components/navComponent/navBar'
import Hero from '../components/heroComponent/Hero'
import AboutSection from '../components/aboutComponent/AboutSection'
import ExperienceCard from '../components/experienceComponent/ExperienceCard'
import ExperienceSection from '../components/experienceComponent/ExperienceSection'
import ProjectSection from '../components/projectsComponent/ProjectSection'

const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <AboutSection/>
        <ExperienceSection/>
        <ProjectSection/>
    </div>
  )
}

export default HomePage
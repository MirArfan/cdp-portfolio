import React from 'react'
import NavBar from '../components/navComponent/navBar'
import Hero from '../components/heroComponent/Hero'
import AboutSection from '../components/aboutComponent/AboutSection'
import ExperienceCard from '../components/experienceComponent/ExperienceCard'
import ExperienceSection from '../components/experienceComponent/ExperienceSection'
import ProjectSection from '../components/projectsComponent/ProjectSection'
import ContactSection from '../components/contactComponent/ContactSection'

const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <AboutSection/>
        <ExperienceSection/>
        <ProjectSection/>
        <ContactSection/>
    </div>
  )
}

export default HomePage
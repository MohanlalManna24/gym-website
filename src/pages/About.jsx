import React from 'react'
import PageHeader from '../component/PageHeader'
import Trainer from '../component/Trainer'
import Testimonial from '../component/Testimonial'
import AboutUs from '../component/AboutUs'
import AskQns from '../component/AskQns'

const About = () => {
  return (
    <div>
      <PageHeader title="About Us" subTitle="Home/About"  />
      <AboutUs/>
      <Trainer/>
      <Testimonial/>
      <AskQns/>
    </div>
  )
}

export default About

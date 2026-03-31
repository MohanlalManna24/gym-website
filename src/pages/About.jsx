import React from 'react'
import PageHeader from '../component/PageHeader'
import Trainer from '../component/Trainer'
import Testimonial from '../component/Testimonial'

const About = () => {
  return (
    <div>
      <PageHeader title="About Us" subTitle="Home/About"  />
      <Trainer/>
      <Testimonial/>
    </div>
  )
}

export default About

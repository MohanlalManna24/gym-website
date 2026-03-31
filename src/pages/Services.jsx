import React from 'react'
import PageHeader from '../component/PageHeader'
import ProgramAndTraining from '../component/ProgramAndTraining'
import Status from '../component/Status'
import BMICalculator from '../component/BMICalculator'

const Services = () => {
  return (
    <div>
      <PageHeader title="Our Services" subTitle="Home/Services" />
      <ProgramAndTraining/>
      <Status/>
      <BMICalculator/>
    </div>
  )
}

export default Services

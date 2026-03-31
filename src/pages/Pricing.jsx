import React from 'react'
import PageHeader from '../component/PageHeader'
import MembershipPlans from '../component/MembershipPlans'
import Testimonial from '../component/Testimonial'

const Pricing = () => {
  return (
    <div>
      <PageHeader title="Pricing" subTitle="Home/Pricing" />
      <MembershipPlans/>
      <Testimonial/>
    </div>
  )
}

export default Pricing

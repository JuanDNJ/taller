import type { FC } from 'react'
import ServicesTemplate from '@/components/templates/ServicesTemplate'
import Template from '@/components/molecules/Template'

const ServicesPage: FC = () => {
  return (

    <Template id="services" tag="main" container='full'>
      <ServicesTemplate />
    </Template>

  )
}

export default ServicesPage

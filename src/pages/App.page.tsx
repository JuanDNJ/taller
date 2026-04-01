import { type FC } from 'react'
import Welcome from '@/components/templates/Welcome'
import ServicesTemplate from '@/components/templates/ServicesTemplate'
import ItvTemplate from '@/components/templates/ItvTemplate'
import Template from '@/components/molecules/Template'

const App: FC = () => {
  return (
    <Template container='full' id="home-template" tag="main">
      <Welcome id="welcome"/>
      <ServicesTemplate id="services"/>
      <ItvTemplate id="itv"/>
    </Template>
  )
}

export default App

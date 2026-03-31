import { type FC } from 'react'
import Welcome from '@/components/templates/Welcome'
import ServicesTemplate from '@/components/templates/ServicesTemplate'
import ItvTemplate from '@/components/templates/ItvTemplate'
import Template from '@/components/ui/Template'

const App: FC = () => {
  return (
    <Template container='full' id="home" tag="main">
      <Welcome />
      <ServicesTemplate />
      <ItvTemplate />
    </Template>
  )
}

export default App

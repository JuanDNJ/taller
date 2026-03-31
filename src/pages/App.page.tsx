import { type FC } from 'react'
import Template from '@/components/ui/Template'
import Welcome from '@/components/templates/Welcome'
import ServicesTemplate from '@/components/templates/ServicesTemplate'
import ItvTemplate from '@/components/templates/ItvTemplate'
const App: FC = () => {
  return (
    <Template id="home" tag="main" container="full">
      <Welcome />
      <ServicesTemplate />
      <ItvTemplate />
    </Template>
  )
}

export default App

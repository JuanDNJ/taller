import type { FC } from 'react'
import Container from '@/components/ui/Container'

type HeroProps = {
    children: React.ReactNode;
}

const Hero: FC<HeroProps> = ({ children }) => {
  return (
        <Container variant='full' className="relative h-screen" >
            {children}
        </Container>
  )
}

export default Hero

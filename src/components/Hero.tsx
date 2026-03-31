import type { FC } from 'react'
import Container from './ui/Container'

type HeroProps = {
    children: React.ReactNode;
}

const Hero: FC<HeroProps> = ({ children }) => {
  return (
        <Container variant='full' className="relative h-full max-h-[95vh]" >
            {children}
        </Container>
  )
}

export default Hero

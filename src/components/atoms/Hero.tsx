import type { FC } from 'react'
import Container from '@/components/atoms/Container'

type HeroProps = {
    children: React.ReactNode;
    id?: string;
}

const Hero: FC<HeroProps> = ({ children, id }) => {
  return (
        <Container id={id} variant='full' className="relative h-screen" >
            {children}
        </Container>
  )
}

export default Hero

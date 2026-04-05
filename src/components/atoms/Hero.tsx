import type { FC } from 'react'
import Container from '@/components/atoms/Container'

type HeroProps = {
    children: React.ReactNode;
    id?: string;
    hfull?: boolean;
}

const Hero: FC<HeroProps> = ({ children, id, hfull }) => {
  return (
        <Container id={id} variant='full' className={`relative ${hfull ? 'h-screen' : 'h-auto'}`} >
            {children}
        </Container>
  )
}

export default Hero

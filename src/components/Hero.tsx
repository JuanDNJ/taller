import type { FC } from 'react'
import TitlePage from './TitlePage'
import Btn from './Btn'
import Container from './ui/Container'

type HeroProps = {
    img: {
        src: string;
        srcSet: string;
        alt: string;
    };
    label: string;
    description: string;
}

const Hero: FC<HeroProps> = ({ img, label, description }) => {
  return (
        <Container variant='full' className="relative h-screen" >
            <img
                srcSet={`${img.src} 1x, ${img.src} 2x`}
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt={img.alt}
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black to-black/50'/>
            <article className="max-w-7xl flex justify-center absolute top-0 left-0 flex flex-col h-full w-full px-4 md:px-8">
                <section className="flex flex-col">
                    <TitlePage tag="h1" label={label} />
                    <article className="mt-8">
                        <p className="md:text-3xl">
                            {description}
                        </p>
                        <footer className="mt-8 lg:py-12 flex flex-col justify-end md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
                            <Btn className="text-xl md:text-3xl bg-tertiary border-transparent hover:bg-tertiary/80 py-2 px-4" label="Contáctanos" onClick={() => console.log('Contact button clicked')} />
                            <Btn className="text-xl md:text-3xl bg-yellow-500/10 border-yellow-500/50 hover:bg-yellow-500/20 py-2 px-4" label="Ver tu proceso" onClick={() => console.log('Progress button clicked')} />
                        </footer>
                    </article>
                </section>
            </article>
        </Container>
  )
}

export default Hero

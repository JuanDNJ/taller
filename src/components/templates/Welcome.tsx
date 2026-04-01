import heroImage from '@/assets/images/png/hero2.png'
import TallerCloe from '@/components/atoms/TallerCloe'
import { HERO_MOOK } from '@/config'
import Btn from '@/components/Btn'
import Hero from '@/components/Hero'
const Welcome = () => {
  return (
        <Hero>
            <img
                srcSet={`${heroImage} 1x, ${heroImage} 2x`}
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Imagen de un taller mecánico con un coche en el elevador y un mecánico trabajando en él"
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 to-transparent' />
            <article className="absolute top-18 xs:top-44 md:top-6 xl:top-18 left-0 max-w-7xl flex flex-col md:justify-center w-full h-full px-4 md:px-8">
                <section className="flex flex-col gap-4">
                    <TallerCloe subtitle />
                    <article className="mt-8 text-stone-100">
                        <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl">
                            {HERO_MOOK.description}
                        </p>
                        <footer className="mt-8 lg:py-12 flex flex-col justify-end md:flex-row space-y-6 md:space-y-0 md:space-x-4 ">
                            <Btn className="text-xl bg-tertiary border-transparent hover:bg-tertiary/80 py-2 px-4" label="Contáctanos" onClick={() => console.log('Contact button clicked')} />
                            <Btn className="text-xl bg-black/40 border-yellow-500/50 hover:bg-yellow-500/20 py-2 px-4" label="Ver tu proceso" onClick={() => console.log('Progress button clicked')} />
                        </footer>
                    </article>
                </section>
            </article>
        </Hero>
  )
}

export default Welcome

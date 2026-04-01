import type { FC } from 'react'
import Container from '@/components/ui/Container'

type HeroTopProps = {
    img?: {
        src: string;
        srcSet: string;
        alt: string;
    };
    className?: string;
    children: React.ReactNode;
}

const HeroTop: FC<HeroTopProps> = ({ img, className, children }) => {
  return (
        <Container variant='full' className={`${img ? 'relative h-screen' : ''} ${className}`} >
            {img && (
                <img
                    srcSet={`${img.src} 1x, ${img.src} 2x`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt={img.alt}
                />
            )}
            <div className={`${img ? 'absolute inset-0 bg-gradient-to-r from-black to-black/50' : 'bg-gradient-to-r from-black to-black/50'}`}/>
            <article className={`max-w-7xl flex justify-center ${img ? 'absolute top-0 left-0' : ''}  flex flex-col h-full w-full px-4 md:px-8`}>
                {children}
            </article>
        </Container>
  )
}

export default HeroTop

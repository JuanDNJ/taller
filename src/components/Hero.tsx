import type { FC } from "react";
import TitlePage from "./TitlePage";
import Btn from "./Btn";

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
        <section className="relative min-h-[62svh] sm:min-h-[55svh] md:min-h-[96svh]" >
            <img
                srcSet={`${img.src} 1x, ${img.src} 2x`}
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt={img.alt}
            />
            <article className="flex justify-center absolute bg-gradient-to-r from-black to-black/50 top-0 left-0 flex flex-col h-full w-full">
                <section className="flex flex-col max-w-4xl">
                    <TitlePage tag="h1" label={label} />
                    <article className="mt-8 px-2">
                        <p className="text-lg lg:text-3xl text-secondary font-medium px-2">
                            {description}
                        </p>
                        <footer className="mt-8 px-4 md:px-8 lg:py-12 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
                            <Btn size="large" className="text-xl text-white bg-blue-800" variant="contact" label="Contáctanos" onClick={() => console.log("Contact button clicked")} />
                            <Btn size="large" className="text-xl bg-white/50 text-white border-white/50" variant="progress" label="Ver tu proceso" onClick={() => console.log("Progress button clicked")} />
                        </footer>
                    </article>
                </section>
            </article>
        </section >
    )
}

export default Hero;

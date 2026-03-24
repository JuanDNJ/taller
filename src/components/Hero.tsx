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
            <article className="lg:bg-black/50 rounded-lg xl:pb-12 lg:p-12 absolute max-w-full -top-10 left-0 sm:max-w-[66vw] sm:left-16 sm::top-4 md:max-w-[62vw] lg:max-w-[66vw] lg:top-8 s xl:top-16 xl:left-50 flex flex-col mt-22 lg:mt-12">
                <TitlePage tag="h1" label={label} />
                <section className="mt-8">
                    <p className="text-lg lg:text-3xl text-secondary font-medium px-4">
                        {description}
                    </p>
                    <footer className="mt-8 px-4 md:px-8 lg:py-12 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:justify-end">
                        <Btn variant="contact" label="Contáctanos" onClick={() => console.log("Contact button clicked")} />
                        <Btn variant="progress"  label="Ver tu proceso" onClick={() => console.log("Progress button clicked")} />
                    </footer>
                </section>
            </article>
        </section >
    )
}

export default Hero;

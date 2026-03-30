import type { FC } from "react";
import TitlePage from "./TitlePage"

type BannerProps = {
    label: string;
    description: string;
    children?: React.ReactNode;
}

const Banner: FC<BannerProps> = ({ label, description, children }) => {

    return (
        <section className="flex flex-col">
            <TitlePage tag="h1" label={label} className="text-yellow-500"/>
            <article className="mt-8">
                <p className="md:text-3xl">
                    {description}
                </p>
                {children}
            </article>
        </section>
    )
}

export default Banner
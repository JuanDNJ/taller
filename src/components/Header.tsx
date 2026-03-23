import type { FC } from "react";
import Brand from "./Brand";
import CurrentUser from "./CurrentUser";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

const Header: FC = () => {
    return (
        <header className="flex justify-between bg-header relative sticky top-0 z-50">
            <section className="hidden lg:flex items-center">
                <Brand label="Juan Valdivia" />
            </section>
            <MenuMobile />
            <MenuDesktop />
            <CurrentUser />
        </header>
    );
}

export default Header;

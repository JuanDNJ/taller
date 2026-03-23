import type { FC } from "react";
import Menu from "./Menu";

const MenuDesktop: FC = () => {
    return (
        <nav className="hidden lg:flex">
            <Menu variant="desktop" />
        </nav>
    );
}

export default MenuDesktop;
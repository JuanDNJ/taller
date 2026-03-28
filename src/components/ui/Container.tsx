import { createElement, type FC } from "react";

type ContainerProps = {
    children: React.ReactNode;
    tag?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const Container: FC<ContainerProps> = ({ children, tag = "section", className = "", style, onClick }) => {
    const Tag = tag;
    return createElement(
        Tag,
        { className: `container mx-auto ${className}`, style, onClick },
        children
    );
}

export default Container

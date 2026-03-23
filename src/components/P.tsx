import type { FC } from "react";

const  P:FC<{ children: string, className?: string }> = ({ children, className }) => {
    return (
        <p className={`text-white max-w-96 lg:text-xl ${className}`}>
            {children}
        </p>
    )
}

export default P;
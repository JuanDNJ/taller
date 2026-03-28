import type { FC } from "react";

type BtnProps = {
    label: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    onClick?: () => void;
}

const Btn: FC<BtnProps> = ({ label, size = 'medium',  className, onClick }) => {


    const sizeStyles = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    }
    
    return (
        <button onClick={onClick} className={`border-2 rounded-md  ${className} ${sizeStyles[size]}`}>
            {label}
        </button>
    )
}

export default Btn;

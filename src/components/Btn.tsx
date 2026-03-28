import type { FC } from "react";

type BtnProps = {
    label: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'comment' | 'contact' | "progress" | 'login' | 'register' | 'outline' | 'default';
    className?: string;
    onClick?: () => void;
}

const Btn: FC<BtnProps> = ({ label, size = 'medium', variant, className, onClick }) => {


    const sizeStyles = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    }
    const vaiantsStyles = {
        comment: `border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 ${sizeStyles[size]}`,
        contact: `border-blue-500 bg-blue-100 text-blue-800 hover:bg-blue-200 ${sizeStyles[size]}`,
        progress: `border-green-500 bg-green-100 text-green-800 hover:bg-green-200 ${sizeStyles[size]}`,
        login: `border-primary bg-primary/20 text-color-base hover:bg-primary/30 ${sizeStyles[size]}`,
        register: `border-secondary bg-secondary/20 text-brand hover:bg-secondary/30 ${sizeStyles[size]}`,
        outline: `border-current bg-transparent text-current hover:bg-gray-100 ${sizeStyles[size]}`,
        default: `border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 ${sizeStyles[size]}`,
    }
    return (
        <button onClick={onClick} className={`border-2 rounded-md ${vaiantsStyles[variant || 'default']} ${className}`}>
            {label}
        </button>
    )
}

export default Btn;

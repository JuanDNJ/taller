import type { FC } from "react";

type BtnProps = {
    label: string;
    variant?: 'comment' | 'contact' | "progress" | 'login' | 'register' | 'outline' | 'default';
    className?: string;
    onClick?: () => void;
}

const Btn: FC<BtnProps> = ({ label, variant, className, onClick }) => {
    const vaiantsStyles = {
        comment: 'border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200',
        contact: 'border-blue-500 bg-blue-100 text-blue-800 hover:bg-blue-200',
        progress: 'border-green-500 bg-green-100 text-green-800 hover:bg-green-200',
        login: 'border-primary bg-primary/20 text-color-base hover:bg-primary/30',
        register: 'border-secondary bg-secondary/20 text-brand hover:bg-secondary/30',
        outline: 'border-current bg-transparent text-current hover:bg-gray-100',
        default: 'border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200',
    }

    return (
        <button onClick={onClick} className={`px-2 py-1 border-2 rounded-md ${vaiantsStyles[variant || 'default']} ${className}`}>
            {label}
        </button>
    )
}

export default Btn;

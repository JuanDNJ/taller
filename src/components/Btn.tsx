import type { FC } from "react";

type BtnProps = {
    label: string;
    variant?: 'comment' | 'contact' | "progress";
    onClick?: () => void;
}

const Btn:FC<BtnProps> = ({ label, variant, onClick }) => {

    const getButtonClass = () => {
        switch (variant) {
            case 'comment':
                return 'px-4 py-2 bg-yellow-500 text-black font-bold rounded';
            case 'contact':
                return 'px-4 py-2 bg-yellow-500 text-black font-bold rounded';
            case 'progress':
                return 'px-4 py-2 bg-gray-500 text-white font-bold rounded';
            default:
                return 'px-4 py-2 bg-yellow-500 text-black font-bold rounded';
        }
    };


    return (
        <button onClick={onClick} className={getButtonClass()}>
            {label}
        </button>
    )
}

export default Btn;

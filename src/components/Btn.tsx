import type { FC } from 'react'

type BtnProps = {
    label: string;
    className?: string;
    onClick?: () => void;
}

const Btn: FC<BtnProps> = ({ label, className, onClick }) => {
  return (
        <button onClick={onClick} className={`border-2 rounded-sm ${className}`}>
            {label}
        </button>
  )
}

export default Btn

import type { FC } from 'react'
import { NavLink } from 'react-router'

type BrandProps = {
  label: string;
  className?: string;
}

const Brand: FC<BrandProps> = ({ label, className }) => {
  return (
    <NavLink to="/" className={`text-xl sm:text-5xl font-black ${className}`}  >
      {label}
    </NavLink>
  )
}

export default Brand

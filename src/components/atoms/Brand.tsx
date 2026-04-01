import type { FC } from 'react'
import { NavLink } from 'react-router'

type BrandProps = {
  label: string;
  className?: string;
}

const Brand: FC<BrandProps> = ({ label, className }) => {
  return (
    <NavLink to="/" className={`inline-flex items-center gap-2 text-xl sm:text-5xl font-black ${className}`}>
      <img src="./logo/mstile-150x150.png" width={56} height={56} alt={label} /> {label}
    </NavLink>
  )
}

export default Brand

import type { FC } from 'react'
import { NavLink } from 'react-router'

type BrandProps = {
  label: string
}

const Brand: FC<BrandProps> = ({ label }) => {
  return (
    <NavLink to="/" className="hover:underline text-xl sm:text-3xl font-bold text-white px-4">
      {label}
    </NavLink>
  )
}

export default Brand

import { type FC } from 'react'
import { NavLink } from 'react-router'

type MenuItem = {
  variant?: 'mobile' | 'desktop'
  onClick?: () => void
}

const ItemMenu: FC<{
  label: string
  onClick?: () => void
}> = ({ label, onClick }) => {
  return (
    <NavLink
      to={`/${label === 'Home' ? '' : label.toLowerCase()}`}
      className={'hover:underline font-black text-mint-500 px-4 py-2'}
      onClick={onClick}
    >
      {label}
    </NavLink>
  )
}

const Menu: FC<MenuItem> = ({ variant = 'desktop', onClick }) => {
  const variantStyle = {
    mobile: 'flex-col w-full h-screen z-100',
    desktop: 'flex-row items-center',
  }
  return (
    <section className={`flex gap-4 lg:gap-8 ${variantStyle[variant]}`}>
      <ItemMenu label="Home" onClick={onClick} />
      <ItemMenu label="About" onClick={onClick} />
      <ItemMenu label="Services" onClick={onClick} />
      <ItemMenu label="Contact" onClick={onClick} />
    </section>
  )
}

export default Menu

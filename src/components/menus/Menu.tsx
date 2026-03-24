import { useState, type FC } from 'react'
import { NavLink } from 'react-router'
import { MENU_LINKS } from '../../config'

export type MenuProps = {
  variant?: 'mobile' | 'desktop'
  onClick?: () => void
}
export type ItemLink = {
  path: string
  label: string
  title?: string
  description?: string
  onClick?: () => void
}

const Item: FC<ItemLink> = ({ path, label, title, onClick }) => {
  return (
    <NavLink
      to={path}
      className={'hover:underline font-black text-link px-4 py-2'}
      onClick={onClick}
      title={title}
    >
      {label}
    </NavLink>
  )
}

const Menu: FC<MenuProps> = ({ variant = 'desktop', onClick }) => {
  const [items] = useState<ItemLink[]>(MENU_LINKS)
  
  const variantStyle = {
    mobile: 'flex-col w-full h-screen z-100',
    desktop: 'flex-row items-center',
  }
  return (
    <nav className={`flex gap-4 lg:gap-8 ${variantStyle[variant]}`}>
      {items.map((item) => (
        <Item key={item.label} path={item.path} label={item.label} title={item.title} description={item.description} onClick={onClick} />
      ))}
    </nav>
  )
}

export default Menu

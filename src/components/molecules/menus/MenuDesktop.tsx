import type { FC } from 'react'
import Menu from '@/components/molecules/menus/Menu'

const MenuDesktop: FC = () => {
  return (
    <section className="hidden lg:flex">
      <Menu variant="desktop" />
    </section>
  )
}

export default MenuDesktop

import type { FC } from 'react'
import Brand from '../../components/Brand'
import CurrentUser from '../../components/CurrentUser'
import MenuMobile from '../../components/MenuMobile'
import MenuDesktop from '../../components/MenuDesktop'

const Header: FC = () => {
  return (
    <header className="bg-header relative sticky top-0 z-50">
      <section className="w-full max-w-7xl mx-auto flex justify-between ">
        <section className="hidden lg:flex items-center">
          <Brand label="Cloe" />
        </section>
        <MenuMobile />
        <MenuDesktop />
        <CurrentUser />
      </section>
    </header>
  )
}

export default Header

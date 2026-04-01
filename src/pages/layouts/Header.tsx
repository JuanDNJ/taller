import type { FC } from 'react'
import Brand from '@/components/atoms/Brand'
import CurrentUser from '@/components/molecules/CurrentUser'
import MenuMobile from '@/components/molecules/menus/MenuMobile'
import MenuDesktop from '@/components/molecules/menus/MenuDesktop'
import ThemeToggle from '@/components/atoms/ThemeToggle'
import { NAME_APP, TITLE_APP, SUBTITLE_APP } from '@/config'
import Container from '@/components/atoms/Container'

const Header: FC = () => {
  return (
    <header className="bg-header relative sticky top-0 z-50 border-b-2 border-yellow-500/50">
      <Container>
        <section className="flex justify-between ">
          <section className="hidden lg:flex items-center" title={`${TITLE_APP} - ${SUBTITLE_APP}`}>
            <Brand label={NAME_APP} className='text-[#94201E]'/>
          </section>
          <MenuMobile />
          <MenuDesktop />
          <section className="flex items-center gap-2">
            <ThemeToggle />
            <CurrentUser />
          </section>
        </section>
      </Container>
    </header>
  )
}

export default Header

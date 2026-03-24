import type { FC } from 'react'
import Brand from '../../components/Brand'
import CurrentUser from '../../components/CurrentUser'
import MenuMobile from '../../components/menus/MenuMobile'
import MenuDesktop from '../../components/menus/MenuDesktop'
import { NAME_APP, TITLE_APP, SUBTITLE_APP} from '../../config'

const Header: FC = () => {
  return (
    <header className="bg-header relative sticky top-0 z-50">
      <section className="w-full max-w-7xl mx-auto flex justify-between ">
        <section className="hidden lg:flex items-center" title={`${TITLE_APP} - ${SUBTITLE_APP}`}>
          <Brand label={NAME_APP} />
        </section>
        <MenuMobile />
        <MenuDesktop />
        <CurrentUser />
      </section>
    </header>
  )
}

export default Header

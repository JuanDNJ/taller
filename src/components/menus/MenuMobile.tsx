import { FaBars } from 'react-icons/fa'
import { useState, type FC } from 'react'
import Menu from './Menu'

const MenuMobile: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <section className="flex lg:hidden items-center ">
      <FaBars className="text-menu-bars ml-4 text-2xl cursor-pointer" onClick={toggleMenu} />
      <nav
        className={`flex lg:hidden bg-header z-100 ${isOpen ? 'absolute top-0 left-0 right-0' : 'hidden'}`}
      >
        <Menu variant="mobile" onClick={() => setIsOpen(false)} />
      </nav>
    </section>
  )
}

export default MenuMobile

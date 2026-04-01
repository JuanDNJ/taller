import { FaBars } from 'react-icons/fa'
import { useState, type FC } from 'react'
import Menu from '@/components/molecules/menus/Menu'
import Brand from '@/components/atoms/Brand'
import { NAME_APP } from '@/config'

const MenuMobile: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <section className="flex lg:hidden items-center">
      <FaBars className="text-menu-bars text-2xl cursor-pointer" onClick={toggleMenu} />
      <nav
        className={`flex flex-col p-4 gap-8 lg:hidden bg-header z-100 ${isOpen ? 'absolute top-0 left-0 right-0' : 'hidden'}`}
      >
        <Brand label={NAME_APP} className='text-4xl text-[#94201E]'/>
        <Menu variant="mobile" onClick={() => setIsOpen(false)} />
      </nav>
    </section>
  )
}

export default MenuMobile

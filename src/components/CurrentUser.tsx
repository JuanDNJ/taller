import { useState } from 'react'
import { useAccount } from '@/context/hooks/useAccount'
import Avatar from '@/components/Avatar'
import LogOutOfGoogle from '@/components/LogOutOfGoogle'
// import SignInWithGoogle from '@/components/SignInWithGoogle'
import { NavLink } from 'react-router'
import Btn from '@/components/Btn'

const CurrentUser = () => {
  const { user } = useAccount()
  const [isOpenUserMenu, setIsOpenUserMenu] = useState<boolean>(false)

  const handleWorking = () => {
    setIsOpenUserMenu(false)
    alert('Funcionalidad en desarrollo')
  }

  return (
    <section className="relative flex gap-4 items-center justify-between rounded-md py-1 my-1">
      {user && (<><header
          className="flex items-center gap-2"
          onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
        >
          {user.photoURL && (
            <Avatar src={user.photoURL as string} alt={user.displayName || 'User Avatar'} />
          )}
          <small className="hidden sm:block text-link font-bold text-xs">
            {user.displayName}
          </small>
        </header>

        {isOpenUserMenu && (
          <article className="absolute top-full -left-14 sm:left-0 mt-2 bg-white rounded-lg shadow-lg p-4 flex flex-col gap-4 lg:mr-4">
            <nav>
              <NavLink to="/account" className="hover:underline">
                Account
              </NavLink>
            </nav>
            <LogOutOfGoogle />
          </article>
        )}</>)}
      {!user && (<>
        {/* <SignInWithGoogle />  */} <div className="hidden md:flex md:gap-2">
          <Btn className='border-transparent bg-gray-600 hover:bg-tertiary/80 py-1 px-3 text-white' label='Inicia Sesión' onClick={handleWorking} />
          <Btn className='border-gray-600 bg-gray-50 hover:bg-gray-200 text-gray-800 py-1 px-3' label='Registrate' onClick={handleWorking} />
        </div>
        <div className="flex md:hidden">
          <Btn className='border-transparent bg-tertiary py-1 px-3' label='Acceder' onClick={handleWorking} />
        </div>
      </>)}
    </section>
  )
}

export default CurrentUser

import { useState } from 'react'
import { useAccount } from '../context/hooks/useAccount'
import Avatar from './Avatar'
import LogOutOfGoogle from './LogOutOfGoogle'
// import SignInWithGoogle from './SignInWithGoogle'
import { NavLink } from 'react-router'
import Btn from './Btn'

const CurrentUser = () => {
  const { user } = useAccount()
  const [isOpenUserMenu, setIsOpenUserMenu] = useState<boolean>(false)
  return (
    <section className="relative flex gap-4 items-center justify-between rounded-md py-1  my-1 mr-4">
      {user ? (
        <>
          <header
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
          )}
        </>
      ) : (
       <>
        {/* <SignInWithGoogle />  */}
        <Btn variant='login' className='border-primary bg-primary/20' label='Inicia Sesión' onClick={() => setIsOpenUserMenu(false)} />
        <Btn variant='register' className='border-secondary bg-secondary/20' label='Registrate' onClick={() => setIsOpenUserMenu(false)} />
       </>
       
      )}
    </section>
  )
}

export default CurrentUser

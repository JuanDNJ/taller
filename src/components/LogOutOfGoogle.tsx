import { signOut } from '../services/account'
import { FaSignOutAlt } from 'react-icons/fa'

const LogOutOfGoogle = () => {
  return <button onClick={signOut} className='group inline-flex items-center gap-2 cursor-pointer'>
    <FaSignOutAlt className='text-red-400 group-hover:text-red-500 group-hover:scale-105'/>
    <small className='text-xs group-hover:underline group-hover:text-blue-600'>
      Log out
    </small>
  </button>
}

export default LogOutOfGoogle

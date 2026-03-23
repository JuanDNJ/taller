import { signOut } from '../services/account'
import { FaSignOutAlt } from "react-icons/fa";

const LogOutOfGoogle = () => {
  return <button onClick={signOut} className='text-black'>
    <FaSignOutAlt />
  </button>
}

export default LogOutOfGoogle

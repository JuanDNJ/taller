import { signInWithGoogle } from '../services/account'
import { FaGoogle } from "react-icons/fa";

const SignInWithGoogle = () => {
  return <button onClick={signInWithGoogle} className='group text-white inline-flex items-center gap-2 cursor-pointer'>
    <FaGoogle size={24} className='text-white group-hover:text-red-600'/> <small className='text-xs group-hover:underline group-hover:text-blue-600' >Sign in with Google</small>
  </button>
}

export default SignInWithGoogle

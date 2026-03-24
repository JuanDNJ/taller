import { signInWithGoogle } from '../services/account'
import { FaGoogle } from "react-icons/fa";

const SignInWithGoogle = () => {
  return <button onClick={signInWithGoogle} className='text-xs group text-white inline-flex items-center gap-2 cursor-pointer'>
    <FaGoogle size={24} className='text-[#4081EC]'/>
    <span className='group-hover:underline group-hover:text-[#E34133]'>
      <i className='group-hover:text-[#E34133]'>Sign</i> <i className='group-hover:text-[#F3B605]'>in with</i> <i className='group-hover:text-[#00A82F]'>Google</i>
    </span>
  </button>
}

export default SignInWithGoogle

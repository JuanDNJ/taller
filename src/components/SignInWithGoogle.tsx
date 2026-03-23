import { signInWithGoogle } from "../services/account"

const SignInWithGoogle = () => {
  return (
    <button onClick={signInWithGoogle}>SignIn Google</button>
  )
}   

export default SignInWithGoogle;
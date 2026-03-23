import { signOut } from "../services/account";

const LogOutOfGoogle = () => {
  return (
    <button onClick={signOut}>LogOut Google</button>
  )
}

export default LogOutOfGoogle;
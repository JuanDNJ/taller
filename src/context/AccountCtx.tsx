import type { User } from "firebase/auth";
import { createContext } from "react";

interface AccountCtxType {
  user: User | null;
}

const AccountCtx = createContext<AccountCtxType>({ user: null });


export default AccountCtx;
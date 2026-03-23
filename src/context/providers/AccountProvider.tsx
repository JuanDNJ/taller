
import { useState, useEffect, type FC } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { toast } from "react-toastify";
import type { Children } from "../../types/inex";
import { auth } from "../../apis/firebase";
import AccountCtx from "../AccountCtx";

const AccountProvider: FC<Children> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user === undefined) return;
    if (user) {
      toast.success(`¡Bienvenido, ${user.displayName || user.email || 'usuario'}!`, { toastId: 'welcome' });
    } else {
      toast.info('Regístrate o inicia sesión para acceder a todas las funciones.', { toastId: 'login' });
    }
  }, [user]);

  return <AccountCtx.Provider value={{ user }}>{children}</AccountCtx.Provider>;
};

export default AccountProvider;
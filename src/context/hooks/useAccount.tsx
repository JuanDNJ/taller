import { useContext } from "react"
import AccountCtx from "../AccountCtx";
export const useAccount = () => {
    const context = useContext(AccountCtx);
    if (!context) {
        throw new Error("useAccount must be used within an AccountProvider");
    }
    return context;
}
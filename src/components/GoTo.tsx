import type { FC } from "react";
import { useNavigate } from "react-router";

type GoToProps = {
    to: string;
    children: React.ReactNode;
    variant?: "history" | "default";
}

const GoTo: FC<GoToProps> = ({ to, children, variant = "default" }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (variant === "history") {
            if (to === "back") {
                navigate(-1);
            } else {
                navigate(+1);
            }
            return;
        } else {
            navigate(to);
        }

    }
    const mode = {
        history: "text-blue-200 hover:text-cyan-400 underline ",
        default: "text-blue-200 hover:text-cyan-400 underline"
    }


    return (
        <button className={mode[variant]} onClick={handleClick}>
            {children}
        </button>
    );
}

export default GoTo;
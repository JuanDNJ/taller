import { useRef, useState, type FC } from "react";
import type { CustomerReviewProps } from "../mook";

const CustomerReview: FC<CustomerReviewProps> = ({ comment, avatar, name, position, color }) => {

    const [isActive, setIsActive] = useState(false);
    const refBlockquote = useRef<HTMLQuoteElement>(null);
    const handleActiveComment = () => {
        if (refBlockquote.current) {
            if (isActive) {
                refBlockquote.current.classList.add('hidden');
                refBlockquote.current.classList.remove('inline', 'absolute', 'bottom-full', String(position));
            } else {
                refBlockquote.current.classList.remove('hidden');
                refBlockquote.current.classList.add('inline', 'absolute', 'bottom-full', String(position));
            }
            setIsActive(!isActive);
        }
    };
    return (<div className={`group absolute ${position} z-1 flex items-center gap-2 cursor-pointer`} >
        <img
            onClick={handleActiveComment}
            src={avatar}
            alt="avatar"
            width={32}
            height={32}
            className="group-hover:-translate-y-1 peer rounded-full w-12 h-12 object-cover object-center bg-cyan-300 border-3 border-white transition-transform duration-300"
        />
        <blockquote ref={refBlockquote} className={`mb-4 hidden w-92 peer-hover:inline peer-hover:absolute peer-hover:bottom-full peer-hover:left-4 text-xs p-2 border ${color?.replace("text", "border")} text-white rounded-lg bg-black`}>
            <div className="flex flex-col gap-2 mb-2">
                <i className={`${color} font-bold`}>{name}</i>
                "{comment}"
            </div>
        </blockquote>
    </div>)
}

export default CustomerReview;

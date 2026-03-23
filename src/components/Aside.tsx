import type { FC, ReactNode } from "react";

const Aside: FC<{ children: ReactNode }> = ({
    children
}) => {
    return (
        <aside className="mt-8 col-span-2 flex items-center">
          {children}
        </aside>
    )
}

export default Aside;

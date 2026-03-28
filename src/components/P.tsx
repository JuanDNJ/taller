import type { FC } from 'react'

const P:FC<{ children: string, className?: string }> = ({ children, className }) => {
  return (
        <p className={`lg:text-xl ${className}`}>
            {children}
        </p>
  )
}

export default P

import { createElement, type FC } from 'react'

type ContainerProps = {
    children: React.ReactNode;
    tag?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    variant?: 'full' | 'default';
}

const Container: FC<ContainerProps> = ({ children, tag = 'section', className = '', style, onClick, variant = 'default' }) => {
  const Tag = tag
  return createElement(
    Tag,
    { className: `${variant === 'full' ? 'w-full grid grid-flow-row auto-rows-max' : 'sm:container sm:mx-auto px-4'} ${className}`, style, onClick },
    children
  )
}

export default Container

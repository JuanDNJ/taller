import { createElement, useEffect, useRef, type FC } from 'react'

type ContainerProps = {
  children: React.ReactNode;
  tag?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  variant?: 'full' | 'default';
  id?: string;
  title?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const Container: FC<ContainerProps> = ({ children, tag = 'section', className = '', style, onClick, variant = 'default', id, title, ref }) => {
  const internalRef = useRef<HTMLDivElement>(null)
  const Tag = tag

  useEffect(() => {
    // Si hay hash y coincide con el id, hacer scroll al contenedor; si no, al tope
    const hash = window.location.hash?.replace('#', '')
    if (id && hash && id === hash) {
      internalRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [id])
  return createElement(
    Tag,
    { id, title, className: `${variant === 'full' ? 'w-full grid grid-flow-row auto-rows-max' : 'sm:container sm:mx-auto px-4'} ${className}`, style, onClick, ref: ref || internalRef },
    children
  )
}

export default Container

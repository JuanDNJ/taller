import type { FC } from 'react'
import Container from '@/components/atoms/Container'

interface TemplateProps {
    id?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    container?: 'full' | 'default' | undefined;
    tag?: 'main' | 'section' | 'article' | 'div';
    title?: string;
    className?:string;
}

const Template: FC<TemplateProps> = ({ children, container = 'default', tag = 'section', id, title, className, style }) => {
  return (
        <Container title={title} id={id} variant={container} tag={tag} className={`text-typography bg-main ${className}`} style={style}>
            {children}
        </Container>
  )
}

export default Template

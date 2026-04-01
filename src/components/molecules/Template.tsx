import type { FC } from 'react'
import Container from '@/components/atoms/Container'

interface TemplateProps {
    id?: string;
    children: React.ReactNode;
    container?: 'full' | 'default' | undefined;
    tag?: 'main' | 'section' | 'article' | 'div';
    title?: string;
}

const Template: FC<TemplateProps> = ({ children, container = 'default', tag = 'section', id, title }) => {
  return (
        <Container title={title} id={id} variant={container} tag={tag}>
            <article className={'bg-main text-typography'}>
                {children}
            </article>
        </Container>
  )
}

export default Template

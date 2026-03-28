import type { FC } from 'react'
import { TAGS_SIZE, TITLE_SIZE } from '../config'

type TitleProps = {
  label: string,
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  color?: string
}

const Title: FC<TitleProps> = ({ label, tag, size, color }) => {
  const Tag = tag || 'h1'
  return (
    <Tag
      className={`${TAGS_SIZE[Tag]} ${color || 'text-title'} ${size && TITLE_SIZE[size]} font-bold`}
    >
      {label}
    </Tag>
  )
}

export default Title

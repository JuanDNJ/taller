import type { FC } from 'react'

type TitlePageProps = {
  label: string,
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  className?: string
}

const TitlePage: FC<TitlePageProps> = ({ label, tag, className }) => {
  label = label
    .replace('Taller Cloe', "<span class='text-cyan-200 block text-4xl xl:text-6xl'>TALLER CLOE</span>")
    .replace('cuidado experto', "<span class='text-yellow-500 text-2xl xl:text-4xl'>CUIDADO EXPERTO</span>")

  const Tag = tag || 'h1'
  return (
    <Tag
      className={`text-typography font-bold text-2xl xl:text-4xl  ${className}`}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  )
}

export default TitlePage

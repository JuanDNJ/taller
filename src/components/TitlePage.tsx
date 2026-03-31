import type { FC } from 'react'

type TitlePageProps = {
  label: string,
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  className?: string
}

const TitlePage: FC<TitlePageProps> = ({ label, tag, className }) => {
  label = label
    .replace('Taller Cloe', "<span class='text-cyan-200 block'>Taller Cloe</span>")
    .replace('cuidado experto', "<span class='text-yellow-500'>CUIDADO EXPERTO</span>")

  const Tag = tag || 'h1'
  return (
    <Tag
      className={`text-typography text-4xl md:text-6xl lg:text-6xl font-bold ${className}`}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  )
}

export default TitlePage

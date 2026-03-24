import type { FC } from 'react'

type TitlePageProps = {
  label: string,
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const TitlePage: FC<TitlePageProps> = ({ label, tag }) => {
  label = label
    .replace('cuidado experto', "<strong class='text-yellow-500'>CUIDADO EXPERTO</strong>")
    .replace('Taller Cloe', "<strong class='text-bg'>Taller Cloe</strong>")
  const Tag = tag || 'h1'
  return (
    <Tag
      className="text-3xl lg:text-6xl font-bold mt-4 px-4 text-white"
      dangerouslySetInnerHTML={{ __html: label }}
    />
  )
}

export default TitlePage

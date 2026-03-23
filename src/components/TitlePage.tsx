import type { FC } from 'react'

type TitlePageProps = {
  label: string,
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const TitlePage: FC<TitlePageProps> = ({ label, tag }) => {
  label = label
    .replace('cuidado experto', "<strong class='text-yellow-500 text-2xl'>CUIDADO EXPERTO</strong>")
    .replace('Juan Valdivia', "<strong class='text-bg text-2xl'>JUAN VALDIVIA</strong>")
  const Tag = tag || 'h1'
  return (
    <Tag
      className="text-3xl font-bold mt-4 px-4 text-white"
      dangerouslySetInnerHTML={{ __html: label }}
    />
  )
}

export default TitlePage

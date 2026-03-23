import type { FC } from 'react'

const TitlePage: FC<{
  label: string
}> = ({ label }) => {
  label = label
    .replace('cuidado experto', "<strong class='text-yellow-500 text-2xl'>CUIDADO EXPERTO</strong>")
    .replace('Juan Valdivia', "<strong class='text-bg text-2xl'>JUAN VALDIVIA</strong>")
  return (
    <h1
      className="text-3xl font-bold mt-4 px-4 text-white"
      dangerouslySetInnerHTML={{ __html: label }}
    />
  )
}

export default TitlePage

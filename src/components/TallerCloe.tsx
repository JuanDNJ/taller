import { TITLE_APP, SUBTITLE_APP } from '@/config'
import type { FC, JSX } from 'react'

type TallerCloeProps = {
  tag?: keyof JSX.IntrinsicElements,
  className?: string,
  subtitle?: boolean
}

const TallerCloe: FC<TallerCloeProps> = ({ tag, className, subtitle }) => {
  const Tag = tag || 'h1'
  const search = 'cuidado experto'
  const label = SUBTITLE_APP.toLowerCase().replace(search, `<strong class='text-yellow-500'>${search.toUpperCase()}</strong>`)
  return !subtitle
    ? (
    <Tag className={`text-pink-200 block text-4xl xl:text-6xl uppercase ${className}`}>
      {TITLE_APP}
    </Tag>
      )
    : (
    <section className='flex flex-col gap-4 font-black text-stone-100'>
      <Tag className={`text-pink-200 text-5xl xs:text-6xl md:text-7xl xl:text-8xl ${className}`}>
        {TITLE_APP}
      </Tag>
      <span className="text-3xl xl:text-4xl" dangerouslySetInnerHTML={{ __html: label }}></span>
    </section>
      )
}

export default TallerCloe

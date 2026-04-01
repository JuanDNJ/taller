import { type FC } from 'react'

type ImageProps = {
    srcSet?: string
    src?: string
    alt: string
    className?: string
}

const Image: FC<ImageProps> = ({ src, alt, className, srcSet }) => {
  return <img src={src} alt={alt} className={className} srcSet={srcSet} />
}

export default Image

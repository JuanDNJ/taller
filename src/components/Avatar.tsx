import type { FC } from 'react'

const Avatar: FC<{ src: string; alt: string; size?: number }> = ({ src, alt, size = 256 }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="border border-green-200/70 w-full h-full max-w-9 max-h-9 rounded-full object-cover hover:scale-95 transition-transform duration-400"
    />
  )
}

export default Avatar

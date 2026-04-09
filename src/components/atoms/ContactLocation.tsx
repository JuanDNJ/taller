import { CONTACT } from '@/config'
import { useState, type FC } from 'react'

const ContactLocation:FC = () => {
  const [location] = useState({
    google_maps: CONTACT.google_maps
  })

  return (
    <article className="flex flex-col col-span-2">
              <iframe
                className="rounded-lg w-full xxs:h-64 md:h-64"
                src={location.google_maps}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
    </article>
  )
}

export default ContactLocation

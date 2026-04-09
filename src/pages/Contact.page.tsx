import type { FC } from 'react'
import Title from '@/components/atoms/Title'
import Template from '@/components/molecules/Template'
import Container from '@/components/atoms/Container'
import Hero from '@/components/atoms/Hero'
import heroImage from '@/assets/images/png/hero_contacto.png'
import { BiSend } from 'react-icons/bi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { MdAccessTime } from 'react-icons/md'
import ContactLocation from '@/components/atoms/ContactLocation'

const ContactPage: FC = () => {
  return (
    <Template id="contact-template" tag="main" container="full">
      <Hero>
        <article className='relative'>
          <img
            srcSet={`${heroImage} 1x, ${heroImage} 2x`}
            className="object-cover"
            width={'100%'}
            alt="Hero Contacto"
          />

          <section className='absolute bg-black/60 top-0 left-0 w-full h-full flex flex-col justify-center px-4 md:px-12'>
            <Title tag="h1" label="Contáctanos" className='text-yellow-500 text-2xl md:text-4xl xl:text-7xl font-bold lg:mt-8' />
            <p className="text-2xl md:text-4xl xl:text-7xl text-stone-100 max-w-3xl">
              Ingeniería de Precisión a tu Servicio
            </p>
          </section>
        </article>
      </Hero>
      <Container className='py-11'>
        <article className='grid grid-cols-12 gap-4'>
          <section className='col-span-12 lg:col-span-7 px-2'>
            <Title tag="h2" label="Envíanos un Mensaje" className='text-yellow-500 text-4xl xl:text-5xl font-bold mt-8' />
            <section className="mt-4">
              <p className="text-xl">
                Nuestro equipo de ingeniería responderá a tu solicitud en menos de 24 horas.
              </p>
            </section>
            <section className="mt-4">
              <form className="grid grid-cols-2 gap-4">
                <div className="mb-4 col-span-2 lg:col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-input-text">Nombre</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500" required />
                </div>
                <div className="mb-4 col-span-2 lg:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-input-text">Correo Electrónico</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500" required />
                </div>
                <div className="mb-4 col-span-2 lg:col-span-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-input-text">Teléfono</label>
                  <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500" required />
                </div>
                <div className="mb-4 col-span-2 lg:col-span-1">
                  <label htmlFor="subject" className="block text-sm font-medium text-input-text">Asunto</label>
                  <input type="text" id="subject" name="subject" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500" required />
                </div>
                <div className="mb-4 col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-input-text">Mensaje</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500" required></textarea>
                </div>
                <footer className="col-span-2 flex">
                  <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 flex items-center font-black">
                    Enviar Mensaje <BiSend className="ml-2" />
                  </button>
                </footer>
              </form>
            </section>
          </section>
          <section className="col-span-12 lg:col-span-5 px-2 grid grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col col-span-2 lg:col-span-1">
              <div className="flex gap-3">
                <FaMapMarkerAlt size={28} className="text-yellow-500" />
                <strong className="text-yellow-500 text-2xl">Dirección</strong>
              </div>
              <span className="text-xl px-2">Calle Falsa 123, Ciudad, País</span>
            </div>
            <div className="flex flex-col col-span-2 lg:col-span-1">
              <div className="flex gap-3">
                <FaPhone size={28} className="text-yellow-500" />
                <strong className="text-yellow-500 text-2xl">Teléfono</strong>
              </div>
              <span className="text-xl px-2">+1 234 567 890</span>
            </div>
             <div className="flex flex-col col-span-2">
              <div className="flex gap-3">
                <MdAccessTime size={28} className="text-yellow-500" />
                <strong className="text-yellow-500 text-2xl">Horario</strong>
              </div>
              <span className="text-xl px-2">Lunes a Viernes: 9:00 AM - 6:00 PM</span>
            </div>
            <ContactLocation />
          </section>
        </article>
      </Container>
    </Template>
  )
}

export default ContactPage

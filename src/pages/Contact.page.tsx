import type { FC } from 'react'
import Title from '@/components/atoms/Title'
import Template from '@/components/molecules/Template'
import Container from '@/components/atoms/Container'

const ContactPage: FC = () => {
  return (
    <Template id="contact-template" tag="main" container="full">
      <Container className='py-11'>
        <Title tag="h1" label="Contacto" className='text-4xl xl:text-5xl font-bold text-center mt-8' />
        <section className="mt-8">
          <p>
            Este proyecto es un sistema de gestión de vehículos para el taller Juan Valdivia. Permite
            a los usuarios agregar, editar y eliminar vehículos, así como gestionar las reparaciones y
            mantenimientos asociados a cada uno.
          </p>
          <p>
            El sistema está construido utilizando React para el frontend y se espera que tenga un
            backend para manejar la lógica de negocio y la persistencia de datos. El objetivo es
            proporcionar una herramienta eficiente para que el taller pueda organizar su trabajo y
            mejorar la experiencia de sus clientes.
          </p>
        </section>
      </Container>
    </Template>
  )
}

export default ContactPage

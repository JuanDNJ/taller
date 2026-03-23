import type { FC } from 'react'
import { NavLink } from 'react-router'
import { BsArrowRight } from 'react-icons/bs'
import { FaTools } from 'react-icons/fa'
import { FaRegPlayCircle } from 'react-icons/fa'
import engineRepair from '../assets/images/engine_repair.png'
import generalMaintenance from '../assets/images/general_maintenance.png'
import mp4Frenos from '../assets/Generación_de_Video_Sistema_de_Frenos.mp4'
import Aside from '../components/Aside'
import Title from '../components/Title'
import Image from '../components/Image'
import P from '../components/P'

const ServicesPage: FC = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto my-8 grid grid-flow-row auto-rows-max md:auto-rows-min gap-4 px-4">
        <Aside>
          <Title label="Nuestros Servicios" tag="h1" size="xl" />
        </Aside>
        <article className="flex flex-col lg:flex-row justify-between gap-4 col-span-2">
          <section className="lg:mt-8 w-full relative bg-black/50">
          <Image srcSet={`${generalMaintenance} 1x, ${generalMaintenance} 2x`} alt="image description" className="w-full h-auto lg:h-96 object-cover aspect-video lg:rounded-lg" />
            <article className="absolute top-0 left-0 flex flex-col gap-2 justify-center h-full w-full px-4 lg:px-20 bg-black/50">
              <div className="flex flex-col lg:mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <i className="hidden lg:inline text-yellow-500">
                    <FaTools size={48} className="text-yellow-500" />
                  </i>
                  <i className="lg:hidden text-yellow-500">
                    <FaTools size={24} className="text-yellow-500" />
                  </i>
                  <Title label="Mantenimiento general" tag="h2" size="lg" />
                </div>
                <P>
                  Cuidado preventivo diseñado para mantener su máquina funcionando al máximo
                  rendimiento mediante rigurosas inspecciones multipunto.
                </P>
              </div>
              <NavLink
                to={'plans'}
                className="group lg:text-lg hover:text-orange-400 inline-flex items-center gap-4 text-orange-200 lg:mt-2"
              >
                Explorar los planes de mantenimiento{' '}
                <BsArrowRight size={24} className="group-hover:text-blue-400" />
              </NavLink>
            </article>
          </section>
          <section className="lg:mt-8 px-6 bg-black lg:rounded-lg relative flex flex-col gap-2 justify-center">
            <FaRegPlayCircle size={32} className="absolute top-8 left-4 text-yellow-500" />
            <article className="flex flex-col gap-4">
              <video className="w-full max-h-72" src={mp4Frenos} controls></video>
              <div className="flex flex-col gap-2 bg-black/50 p-4">
                <Title label="Sistemas de frenos" tag="h2" size="md" />
                <P>
                  Soluciones de potencia de frenado de alto rendimiento y calibración de seguridad.
                </P>
              </div>
            </article>
          </section>
        </article>
        <article className="flex flex-col lg:flex-row gap-4 col-span-2">
          <section className="px-4 bg-gray-800 flex items-center lg:rounded-lg lg:px-14">
            <div className="flex flex-col gap-4 py-8">
              <Title label="Diagnóstico avanzado" tag="h2" size="lg" />
              <P>
                Precisión milimétrica utilizando la última tecnología de escaneo y telemetría
                digital.
              </P>
            </div>
          </section>
          <section className="flex flex-col lg:flex-row items-center lg:px-14 gap-8 lg:gap-16 bg-gray-800 min-h-80 lg:rounded-lg">
            <article className="w-full flex flex-col justify-center gap-4 p-4">
              <Title label="Reparación de motores" tag="h2" size="lg" />
              <P>
                Reconstrucciones completas y restauración de componentes utilizando piezas con
                especificaciones OEM y experiencia de un técnico maestro.
              </P>
              
            </article>
            <Image
              srcSet={`${engineRepair} 1x, ${engineRepair} 2x`}
              className="lg:w-40 lg:h-40 object-cover lg:rounded-lg"
              alt="image description"
            />
          </section>
        </article>
      </section>
    </main>
  )
}

export default ServicesPage

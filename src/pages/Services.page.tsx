import type { FC } from 'react'
import { NavLink } from 'react-router'
import { BsArrowRight } from 'react-icons/bs'
import { FaTools, FaRegPlayCircle } from 'react-icons/fa'
import engineRepair from '../assets/images/engine_repair.png'
import generalMaintenance from '../assets/images/general_maintenance.png'
import mp4Frenos from '../assets/Generación_de_Video_Sistema_de_Frenos.mp4'
import Aside from '../components/Aside'
import Title from '../components/Title'
import { SERVICE_MOOK } from '@/config'
import Container from '@/components/ui/Container'

const ServicesPage: FC = () => {
  return (<Container tag='main'>
    <section className="my-8 grid grid-flow-row auto-rows-max md:auto-rows-min gap-4 px-4 ">
      <Aside>
        <Title label={SERVICE_MOOK.title} tag="h2" />
      </Aside>
      <article className="flex flex-col lg:flex-row justify-between gap-4 col-span-2">
        <section className="lg:mt-8 w-full relative bg-black/50 rounded-sm lg:rounded-xl overflow-hidden">
          <img
            srcSet={`${generalMaintenance} 1x, ${generalMaintenance} 2x`}
            className="w-full h-auto lg:h-96 object-cover aspect-video lg:rounded-lg"
            alt="image description"
          />
          <article className="absolute top-0 left-0 flex flex-col gap-2 justify-center h-full w-full px-4 lg:px-20 bg-black/50">
            <div className="flex flex-col lg:mb-12">
              <h2 className="text-2xl lg:text-4xl my-2 font-bold text-white">
                {SERVICE_MOOK.maintenance.label}
              </h2>
              <i className="hidden lg:inline absolute lg:top-4 lg:left-20 text-yellow-500">
                <FaTools size={48} className="text-yellow-500" />
              </i>
              <i className="absolute lg:hidden top-1 left-4 text-yellow-500">
                <FaTools size={24} className="text-yellow-500" />
              </i>
              <p className="text-white max-w-96 lg:text-xl">
                {SERVICE_MOOK.maintenance.description}
              </p>
            </div>
            <NavLink
              to={'plans'}
              className="group lg:text-lg hover:text-orange-400 inline-flex items-center gap-4 text-orange-200 lg:mt-2"
            >
              Explorar los planes de mantenimiento
              <BsArrowRight size={24} className="group-hover:text-blue-400" />
            </NavLink>
          </article>
        </section>
        <section className="lg:mt-8 px-6 bg-black lg:rounded-lg relative flex flex-col gap-2 justify-center">
          <FaRegPlayCircle size={32} className="absolute top-8 left-4 text-yellow-500" />
          <article className="flex flex-col gap-4">
            <video className="w-full max-h-72" src={mp4Frenos} controls></video>
            <div className="flex flex-col gap-2 bg-black/50 p-4">
              <h3 className="text-xl lg:text-2xl font-bold text-white">{SERVICE_MOOK.brakes.label}</h3>
              <p className="text-white">
                {SERVICE_MOOK.brakes.description}
              </p>
            </div>
          </article>
        </section>
      </article>
      <article className="flex flex-col lg:flex-row gap-4 col-span-2">
        <section className="px-4 bg-gray-800 flex items-center rounded-sm lg:rounded-xl lg:px-14">
          <div className="flex flex-col gap-4 py-8">
            <h2 className="text-xl lg:text-4xl font-bold mb-4 text-white">
              {SERVICE_MOOK.diagnostics.label}
            </h2>
            <p className="text-white lg:text-xl">
              {SERVICE_MOOK.diagnostics.description}
            </p>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center lg:px-14 gap-8 lg:gap-16 bg-gray-800 min-h-80 rounded-sm lg:rounded-xl">
          <article className="w-full flex flex-col justify-center gap-4 p-4">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white">
              {SERVICE_MOOK.engine_repair.label}
            </h2>
            <p className="text-white lg:text-xl">
              {SERVICE_MOOK.engine_repair.description}
            </p>
          </article>
          <img
            srcSet={`${engineRepair} 1x, ${engineRepair} 2x`}
            className="lg:w-40 lg:h-40 object-cover rounded-sm lg:rounded-xl"
            alt="image description"
          />
        </section>
      </article>
    </section>
  </Container>

  )
}

export default ServicesPage

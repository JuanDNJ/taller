import { useState, type FC } from 'react'
import { Link } from 'react-router'
import { BsArrowRight } from 'react-icons/bs'
import { FaTools, FaRegPlayCircle } from 'react-icons/fa'
import { CoustomersReviews, type CustomerReviewProps } from '../mook'
import { HERO_MOOK, ITV_MOOK, SERVICE_MOOK } from '@/config'
import heroImage from '@/assets/images/png/hero2.png'
import engineRepair from '@/assets/images/png/engine_repair.png'
import generalMaintenance from '@/assets/images/png/general_maintenance.png'
import mp4Frenos from '@/assets/mp4/Generación_de_Video_Sistema_de_Frenos.mp4'
import CustomerReview from '@/components/CustomerReview'
import Hero from '@/components/Hero'
import Aside from '@/components/Aside'
import Title from '@/components/Title'
import Template from '@/components/ui/Template'
const App: FC = () => {
  const [customersReviews] = useState<CustomerReviewProps[]>(CoustomersReviews)

  return (
    <Template id="home" tag="main" container="full">
      {/* Hero */}
      <Hero img={{
        src: heroImage,
        srcSet: `${heroImage} 1x, ${heroImage} 2x`,
        alt: 'Imagen de un taller mecánico con un coche en el elevador y un mecánico trabajando en él'
      }} label={HERO_MOOK.label} description={HERO_MOOK.description} />
      {/* Servicios */}
      <Template id="services">
        <article className="my-8 grid grid-flow-row auto-rows-max md:auto-rows-min gap-4">
          <Aside>
            <Title size='lg' label={SERVICE_MOOK.title} tag="h2" />
          </Aside>
          <section className="flex flex-col lg:flex-row justify-between gap-4 col-span-2">
            <article className="lg:mt-8 w-full relative bg-black/50">
              <img
                srcSet={`${generalMaintenance} 1x, ${generalMaintenance} 2x`}
                className="w-full h-auto object-cover aspect-video"
                alt="image description"
              />
              <div className="absolute top-0 left-0 flex flex-col gap-2 justify-center h-full w-full px-4 lg:px-20 bg-black/50">
                <div className="flex flex-col lg:mb-12">
                  <Title className='text-2xl' label={SERVICE_MOOK.maintenance.label} color="text-yellow-500" />

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
                <Link
                  to="about#technicians"
                  className="group lg:text-lg hover:text-orange-400 inline-flex items-center gap-4 text-orange-200 lg:mt-2"
                >
                  Explorar los planes de mantenimiento
                  <BsArrowRight size={24} className="group-hover:text-blue-400" />
                </Link>
              </div>
            </article>
            <article className="lg:mt-8 px-6 py-12 bg-black relative flex flex-col gap-2 justify-center">
              <FaRegPlayCircle size={32} className="absolute top-8 left-4 text-yellow-500" />
              <div className="flex flex-col gap-4">
                <video className="w-full max-h-72" src={mp4Frenos} controls></video>
                <div className="flex flex-col gap-2 bg-black/50 p-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-white">{SERVICE_MOOK.brakes.label}</h3>
                  <p className="text-white">
                    {SERVICE_MOOK.brakes.description}
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section className="flex flex-col lg:flex-row gap-4 col-span-2">
            <article className="px-4 bg-gray-800 flex items-center  lg:px-14">
              <div className="flex flex-col gap-4 py-8">
                <h2 className="text-xl lg:text-4xl font-bold mb-4 text-white">
                  {SERVICE_MOOK.diagnostics.label}
                </h2>
                <p className="text-white lg:text-xl">
                  {SERVICE_MOOK.diagnostics.description}
                </p>
              </div>
            </article>
            <article className="flex flex-col lg:flex-row items-center lg:px-14 gap-8 lg:gap-16 bg-gray-800 min-h-80">
              <div className="w-full flex flex-col justify-center gap-4 p-4">
                <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white">
                  {SERVICE_MOOK.engine_repair.label}
                </h2>
                <p className="text-white lg:text-xl">
                  {SERVICE_MOOK.engine_repair.description}
                </p>
              </div>
              <img
                srcSet={`${engineRepair} 1x, ${engineRepair} 2x`}
                className="lg:w-40 lg:h-40 object-cover rounded-sm lg:rounded-xl"
                alt="image description"
              />
            </article>
          </section>
        </article>
      </Template>
      <Template id="itv">
        {/* ITV */}
        <article className="grid grid-flow-row md:grid-flow-col my-8">
          <section className="mt-8 px-4 flex flex-wrap items-center lg:col-span-2 gap-8 lg:gap-0">
            <article className="flex flex-col gap-4">
              <Title label={ITV_MOOK.label} tag="h2" size="lg" />
              <p className="text-paragraph">
                {ITV_MOOK.description}
              </p>
            </article>
            <article className="w-full lg:max-w-md bg-title rounded-sm lg:rounded-xl p-4 flex gap-8 relative">
              <div className="min-w-26 flex items-center gap-4">
                {customersReviews.map((review, index) => (
                  <CustomerReview key={index} {...review} />
                ))}

              </div>
              <div className='flex items-center'>
                <span className="xxs:text-xs xs:text-sm sm:text-lg m :text-xl text-link">Lo que dicen nuestros clientes</span>
              </div>
            </article>
          </section>
          <section className="mt-8 px-4">
            <Title label={ITV_MOOK.book_an_appointment.label} tag="h2" size="lg" />
            <span className="text-paragraph">
              {ITV_MOOK.book_an_appointment.description}
            </span>
            <form className="mt-4 flex flex-col space-y-2 bg-form p-4 rounded-sm lg:rounded-xl">
              <input
                id="name"
                name="name"
                type="text"
                placeholder={ITV_MOOK.book_an_appointment.data.name}
                className="w-full mt-4 px-4 py-2 rounded bg-input-bg text-input-text"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder={ITV_MOOK.book_an_appointment.data.email}
                className="w-full mt-4 px-4 py-2 rounded bg-input-bg text-input-text"
              />
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder={ITV_MOOK.book_an_appointment.data.phone}
                className="w-full mt-4 px-4 py-2 rounded bg-input-bg text-input-text"
              />
              <textarea
                id="message"
                name="message"
                placeholder={ITV_MOOK.book_an_appointment.data.message}
                className="w-full mt-4 px-4 py-2 rounded bg-input-bg text-input-text"
              ></textarea>
              <button

                type="submit"
                className="mt-4 px-4 py-2 bg-yellow-500 font-bold rounded"
              >
                Enviar
              </button>
            </form>
          </section>
        </article>
      </Template>
    </Template>
  )
}

export default App

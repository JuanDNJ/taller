import { useState, type FC } from 'react'
import TitlePage from '@/components/TitlePage'
import img from '@/assets/images/png/maestro_técnico_trabajando.png'
import Container from '@/components/ui/Container'
import Title from '@/components/Title'
import entorno from '@/assets/images/png/entorno_taller.png'
import details from '@/assets/images/png/herramientas_de_alta_gama.png'
import { ABOUT, OUR_TECHNICIANS } from '@/config'
import OkSvg from '@/components/ui/icons/OkSvg'
import Banner from '@/components/Banner'
import HeroTop from '@/components/HeroTop'
import Btn from '@/components/Btn'

type LegacyProps = { label: string, description: string, icon?: string }

const AboutPage: FC = () => {
  const [items] = useState<LegacyProps[]>(ABOUT.history.story_elements)
  const uiTitle = ('La Precisión es nuestro único Estándar').replace('único Estándar', "<span class='text-yellow-500'>ÚNICO ESTÁNDAR</span>")
  return (
    <Container id="about" tag="main" variant='full' className='bg-main text-typography'>
      <article className='flex flex-col xl:grid xl:grid-cols-2'>
        <div className='flex flex-col gap-4 justify-center px-4 my-11 xl:px-9 xl:my-0'>
          <TitlePage label={uiTitle} />
          <article>
            <p className='text-xl md:text-3xl'>
              En Taller CLOE, no solo reparamos vehículos; diseñamos
              soluciones. Con más de tres décadas de maestría en cuidado
              automotriz de alta gama, fusionamos la precisión quirúrgica
              con el poder industrial.
            </p>
          </article>
        </div>
        <section className='relative'>
          <img
            srcSet={`${img} 1x, ${img} 2x`}
            className="w-full xl:w-[77dvw] h-screen object-cover"
            alt="Maestro técnico trabajando"
          />
          <article className='bg-main/80 absolute -bottom-0  xl:-left-56 md:max-w-md px-4 xl:px-8 py-8'>
            <Title color="text-yellow-500" label="Especificaciones del Taller" />
            <div className="mt-8">
              <p className='text-white text-xl'>
                Entornos de flujo de trabajo
                optimizados para una
                ejecución mecánica de
                grado quirúrgico.
              </p>
            </div>
          </article>
        </section>
      </article>
      <Container id="history">
        <article className="pt-24">
          <section className='md:grid md:grid-cols-2 gap-4'>
            <article className='flex flex-col '>
              <Title size='xl' label="Nuestra Historia" />
              <p className='text-typography text-xl mt-4'>
                Fundado en el corazón de la excelencia industrial, Taller CLOE comenzó con un solo elevador
                y la visión de redefinir el mantenimiento automotriz para vehículos de lujo y alto
                rendimiento. Hoy, somos el referente de autoridad técnica.
              </p>
            </article>
            <article className='flex flex-col items-center md:items-end  md:justify-end gap-4 pt-8 md:p-0'>
              <i className='inline-flex text-gray-800 text-6xl font-black'>30+ AÑOS</i>
            </article>
          </section>
          <section className='md:grid md:grid-cols-3 gap-8 md:pb-22'>
            {items.map((item, index) => (
              <article key={index} className="mt-12 bg-[#0B1326] p-8 flex flex-col gap-4">
                <img src={item.icon} alt={item.label} width={26} height={26} />
                <div>
                  <Title color="text-white" label={item.label} className='text-main' />
                  <p className='text-white text-lg mt-4'>
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </section>
        </article>
      </Container>
      <Container id="installations">
        <article className="flex flex-col xl:py-22 xl:grid xl:grid-flow-row xl:grid-cols-12 gap-4">
          <section className="row-1 col-span-8 relative">
            <img className="md:w-full md:max-h-[512px] object-cover " src={entorno} alt="Entorno del taller" />
            <article className='absolute top-1 xxs:top-8 xs:top-12 md:top-22 lg:top-44  lg:left-0 lg:max-w-sm lg:max-w-xl lg:m-4'>
              <i className='text-yellow-500 px-4'>{ABOUT.history.installations.badgets.label.toUpperCase()}</i>
              <Title label={ABOUT.history.installations.label} className="px-4 xl:mt-6 text-xl md:text-4xl" />
              <p className='text-typography text-xxs xs:text-xs sm:text-xl md:text-2xl xl:mt-4 px-4'>
                {ABOUT.history.installations.description}
              </p>
            </article>
          </section>
          <section className="row-1 col-span-4 bg-[#44474C] flex flex-col p-6">
            <span className="p-4 rounded-sm text-gray-400 text-sm mb-4">INSTALCIONES</span>
            <article className="flex flex-col gap-4 ">
              <Title label="Un entorno estéril para el rendimiento" className="px-4" />
              <p className='text-typography text-lg mt-4 px-4 mb-4'>
                Nuestras instalaciones están diseñadas paraº
                imitar un laboratorio aeroespacial. Superficies
                limpias, control climático y bahías de diagnóstico
                especializadas aseguran que cada vehículo sea
                tratado en condiciones óptimas.
              </p>
              <ul className='p-4 text-typography space-y-2'>
                <li className='flex items-center gap-2'><OkSvg /> Entrada de aire filtrada por HEPA</li>
                <li className='flex items-center gap-2'><OkSvg /> Suelos antiestáticos</li>
                <li className='flex items-center gap-2'><OkSvg /> Sistemas de alineación láser</li>
              </ul>
            </article>
          </section>
          <section className='row-2 col-span-4 '>
            <img className="w-[409px] max-h-[318px] object-cover" src={details} alt="Herramientas de alta gama" />
          </section>
          <section className='row-2 col-span-8 h-full flex gap-4 flex-col md:flex-row md:items-center px-0 md:p-9'>
            {ABOUT.history.installations.badgets && (
              <article className='flex items-center justify-between md:px-4 w-full'>
                <div className='flex flex-col gap-2'>
                  <i className='text-center md:text-left text-yellow-500 text-2xl md:text-4xl font-bold'>{ABOUT.history.installations.badgets.completed_services.count}</i>
                  <span className='text-typography text-sm md:text-lg'>{ABOUT.history.installations.badgets.completed_services.label}</span>
                </div>
                <div className='flex flex-col gap-2'>
                  <i className='text-center md:text-left text-yellow-500 text-2xl md:text-4xl font-bold'>{ABOUT.history.installations.badgets.complet.technics}</i>
                  <span className='text-typography text-sm md:text-lg'>{ABOUT.history.installations.badgets.complet.label}</span>
                </div>
                <div className='flex flex-col gap-2'>
                  <i className='text-center md:text-left text-yellow-500 text-2xl md:text-4xl font-bold'>{ABOUT.history.installations.badgets.diagnostics.percent}</i>
                  <span className='text-typography text-sm md:text-lg'>{ABOUT.history.installations.badgets.diagnostics.label}</span>
                </div>
              </article>
            )}
          </section>
        </article>
      </Container>
      <Container id="technicians">
        <article className='md:max-w-6xl'>
          <Title size='xl' label={OUR_TECHNICIANS.label} />
          <p className='text-xl'>
            {OUR_TECHNICIANS.description}
          </p>
        </article>
        <article className='flex flex-col md:flex-row md:flex-wrap gap-4 mt-8 justify-around'>
          {OUR_TECHNICIANS.technicians.map((tech, index) => (
            <section key={index} className="w-full md:max-w-90 flex flex-col gap-6 my-8 justify-between">
              <img src={tech.image} alt={tech.name} className="w-full min-h-[9rem] max-h-[18rem] aspect-[4/3] object-cover" />
              <article className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2 text-typography'>
                  <Title className="text-yellow-500 font-bold" label={tech.name} />
                  <strong className="text-sm font-black">{tech.role}</strong>
                  <p title={tech.experience} className="">{tech.experience}</p>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-2 justify-between">
                  <strong className='col-span-full'>Especialidades:</strong>
                  {tech.specialties.map((specialty, idx) => (
                    <span key={idx} className='text-typography text-xs text-center rounded-sm border border-cyan-500/50 py-1'>{specialty}</span>
                  ))}
                </div>
              </article>
            </section>
          ))}
        </article>
      </Container>
      <Container id="experience">
        <HeroTop className='py-8 md:p-22 text-center bg-gray-500/10 my-22'>
          <div className='max-w-3xl mx-auto'>
            <Banner
              label={'¿Listo para la Experiencia, en el Taller de CLOE?'}
              description={`Únase a los cientos de propietarios 
              que confían sus activos más preciados a nuestro 
              cuidado quirúrgico. Su vehículo merece la mejor
              mente de ingeniería disponible.`}
            >
              <footer className='flex justify-center mt-8 lg:py-12 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 '>
                <Btn className="bg-tertiary border-transparent py-2 px-6 text-xl" label="Reserve su Servicio" onClick={() => console.log('Contact button clicked')} />
                <Btn className="bg-white/20 border-white/10 py-2 px-6 text-xl" label="Ver flota Tecnica" onClick={() => console.log('Progress button clicked')} />
              </footer>
            </Banner>
          </div>
        </HeroTop>
      </Container>
    </Container>
  )
}

export default AboutPage

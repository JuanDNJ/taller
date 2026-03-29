import { useState, type FC } from 'react'
import TitlePage from '@/components/TitlePage'
import img from '@/assets/images/png/maestro_técnico_trabajando.png'
import Container from '@/components/ui/Container'
import Title from '@/components/Title'
import entorno from '@/assets/images/png/entorno_taller.png'
import details from '@/assets/images/png/herramientas_de_alta_gama.png'
import { ABOUT, OUR_TECHNICIANS } from '@/config'
import OkSvg from '@/components/ui/icons/OkSvg'

type LegacyProps = { label: string, description: string, icon?: string }

const AboutPage: FC = () => {
  const [items] = useState<LegacyProps[]>(ABOUT.history.story_elements)

  const uiTitle = ('La Precisión es nuestro único Estándar').replace('único Estándar', "<span class='text-yellow-500'>ÚNICO ESTÁNDAR</span>")
  return (
   <main className='bg-main text-typography'>
      <section className='flex flex-col md:grid md:grid-cols-2'>
        <article className='flex flex-col gap-4 justify-center p-4 md:px-16 '>
          <TitlePage label={uiTitle} />
          <section className="mt-8 px-4">
            <p className='text-3xl'>
              En Taller CLOE, no solo reparamos vehículos; diseñamos
              soluciones. Con más de tres décadas de maestría en cuidado
              automotriz de alta gama, fusionamos la precisión quirúrgica
              con el poder industrial.
            </p>
          </section>
        </article>
        <article className='relative'>
          <img
            srcSet={`${img} 1x, ${img} 2x`}
            className="md:w-[77dvw] h-screen object-cover"
            alt="Maestro técnico trabajando"
          />
          <article className=' bg-[#131B2E] absolute -bottom-0 md:-left-22 md:max-w-md p-8'>
            <Title color="text-yellow-500" label="Especificaciones del Taller" />
            <section className="mt-8">
              <p className='text-white text-xl'>
                Entornos de flujo de trabajo
                optimizados para una
                ejecución mecánica de
                grado quirúrgico.
              </p>
            </section>
          </article>
        </article>
      </section>
      <section className="bg-[#131B2E]">
        <Container>
          <section className="pt-24">
            <article className='md:grid md:grid-cols-2 gap-4 px-4'>
              <div className='flex flex-col '>
                <Title size='xl' label="Nuestra Historia" />
                <p className='text-typography text-xl mt-4'>
                  Fundado en el corazón de la excelencia industrial, Taller CLOE comenzó con un solo elevador
                  y la visión de redefinir el mantenimiento automotriz para vehículos de lujo y alto
                  rendimiento. Hoy, somos el referente de autoridad técnica.
                </p>
              </div>
              <div className='flex flex-col items-center md:items-end  md:justify-end gap-4 pt-8 md:p-0'>
                <i className='inline-flex text-gray-800 text-6xl font-black'>30+ AÑOS</i>
              </div>
            </article>
            <article className='md:grid md:grid-cols-3 gap-8 md:pb-22 px-4'>
              {items.map((item, index) => (
                <section key={index} className="mt-12 bg-[#0B1326] p-8 flex flex-col gap-4">
                  <img src={item.icon} alt={item.label} width={26} height={26} />
                  <div>
                    <Title color="text-white" label={item.label} className='text-main' />
                    <p className='text-white text-lg mt-4'>
                      {item.description}
                    </p>
                  </div>
                </section>
              ))}
            </article>
          </section>
        </Container>
      </section>
      <section className="bg-[#0B1326]">
        <Container>
          <section className="flex flex-col md:py-22 md:grid md:grid-flow-row md:grid-cols-12 gap-4 px-4">
            <div className="row-1 col-span-8 relative">
              <img className="md:w-full md:max-h-[512px] object-cover " src={entorno} alt="Entorno del taller" />
              <div className='absolute top-4 md:top-44  md:left-0 md:max-w-sm md:max-w-xl md:m-4'>
                <i className='text-yellow-500 px-4'>{ABOUT.history.installations.badgets.label.toUpperCase()}</i>
                <Title label={ABOUT.history.installations.label} className="px-4 mt-6 text-xl md:text-4xl" />
                <p className='text-typography md:text-2xl mt-4 px-4 mb-4'>
                  {ABOUT.history.installations.description}
                </p>
              </div>
            </div>
            <div className="row-1 col-span-4 bg-[#44474C] flex flex-col p-6">
              <span className="p-4 rounded-sm text-gray-400 text-sm mb-4">INSTALCIONES</span>
              <div className="flex flex-col gap-4 ">
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
              </div>
            </div>
            <div className='row-2 col-span-4 '>
              <img className="w-[409px] max-h-[318px] object-cover" src={details} alt="Herramientas de alta gama" />
            </div>
            <div className='row-2 col-span-8 h-full flex gap-4 flex-col md:flex-row md:items-center px-0 md:p-9'>
              {ABOUT.history.installations.badgets && (
                <div className='flex items-center justify-between md:px-4 w-full'>
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
                </div>
              )}
            </div>
          </section>
        </Container>
      </section>
      <section className="bg-main">
        <Container className="py-22 px-4">
          <Title size='xl' label={OUR_TECHNICIANS.label} className="py-12" />
          <p className='text-xl'>
            {OUR_TECHNICIANS.description}
          </p>
          {/* Aquí puedes agregar la sección de técnicos si lo deseas */}
          <div className='flex flex-col md:grid md:grid-flow-col md:auto-cols-[minmax(0,22rem)] md:gap-8 mt-12'>
            {/* Por ejemplo, podrías mapear un array de técnicos similar a cómo se hizo con los elementos de la historia */}
            {OUR_TECHNICIANS.technicians.map((tech, index) => (
              <div key={index} className="flex flex-col gap-6 my-8 justify-between">
                <img src={tech.image} alt={tech.name} className="w-full min-h-[9rem] max-h-[18rem] object-cover" />
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2 text-typography'>
                    <Title className="text-yellow-500 font-bold" label={tech.name} />
                    <strong className="text-sm font-black">{tech.role}</strong>
                    <p title={tech.experience} className="text-overflow truncate">{tech.experience}</p>
                  </div>
                  <div className="grid grid-cols-3 auto-cols-[minmax(0,8rem)] gap-2 justify-between">
                    <strong className='col-span-full'>Especialidades:</strong>
                    {tech.specialties.map((specialty, idx) => (
                      <span key={idx} className='text-typography text-xs text-center rounded-sm border border-cyan-500/50 px-2 py-1'>{specialty}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}

export default AboutPage

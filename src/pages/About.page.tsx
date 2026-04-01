import { type FC } from 'react'
import img from '@/assets/images/png/maestro_técnico_trabajando.png'
import Template from '@/components/molecules/Template'
import Title from '@/components/atoms/Title'
import HistoryTemplate from '@/components/templates/HistoryTemplate'
import IstalationsTemplate from '@/components/templates/InstallationsTemplate'
import TechniciansTemplate from '@/components/templates/TechniciansTemplate'
import ExperienceTemplate from '@/components/templates/ExperienceTemplate'

const AboutPage: FC = () => {
  const uiTitle = ('La Precisión es nuestro único Estándar').replace('único Estándar', "<span class='block text-yellow-500 text-5xl xl:text-6xl'>ÚNICO ESTÁNDAR</span>")
  return (
    <Template id="about-template" tag="main" container='full'>
      <article className='flex flex-col xl:grid xl:grid-cols-2'>
        <div className='flex flex-col gap-4 justify-center px-4 my-11 xl:px-9 xl:my-0'>
          <h1 className='text-4xl xl:text-5xl font-bold' dangerouslySetInnerHTML={{ __html: uiTitle }} />
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
              <p className='text-xl'>
                Entornos de flujo de trabajo
                optimizados para una
                ejecución mecánica de
                grado quirúrgico.
              </p>
            </div>
          </article>
        </section>
      </article>
      <HistoryTemplate />
      <IstalationsTemplate />
      <TechniciansTemplate />
      <ExperienceTemplate />
    </Template>
  )
}

export default AboutPage

import { useState, type FC, type JSX } from 'react'
import TitlePage from '@/components/TitlePage'
import img from '@/assets/images/maestro_técnico_trabajando.png'
import Container from '@/components/ui/Container'
import Title from '@/components/Title'
import entorno from '@/assets/images/entorno_taller.png'
import details from '@/assets/images/herramientas_de_alta_gama.png'
import LegacySvg from '@/components/ui/icons/LegacySvg'
import PrecisionSvg from '@/components/ui/icons/PrecisionSvg'
import OkSvg from '@/components/ui/icons/OkSvg'
import ShieldSvg from '@/components/ui/icons/ShieldSvg'

type LegacyProps = { title: string, description: string, icon?: JSX.Element }

const AboutPage: FC = () => {
  const [items] = useState<LegacyProps[]>([
    {
      title: 'Taller de Precisión',
      description: 'Donde la excelencia automotriz se encuentra con la precisión quirúrgica.',
      icon: <LegacySvg />
    },
    {
      title: 'Cuidado Experto',
      description: 'Mecánica de grado quirúrgico para vehículos de lujo y alto rendimiento.',
      icon: <PrecisionSvg />
    },
    {
      title: 'Soluciones Personalizadas',
      description: 'Diseñamos soluciones a medida para cada vehículo, fusionando arte y ciencia automotriz.',
      icon: <ShieldSvg />
    }
  ])

  const uiTitle = ('La Precisión es nuestro único Estándar').replace('único Estándar', "<span class='text-yellow-500'>ÚNICO ESTÁNDAR</span>")
  return (
    <main className=''>
      <section className='grid grid-cols-2'>
        <article className='flex flex-col gap-4 justify-center px-16 bg-[#0B1326]'>
          <TitlePage label={uiTitle} />
          <section className="mt-8 px-4">
            <p className='text-main text-3xl'>
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
            className="w-[77dvw] h-screen object-cover"
            alt="Maestro técnico trabajando"
          />
          <article className=' bg-[#131B2E] absolute -bottom-0 -left-22 max-w-md p-8'>
            <Title color="text-yellow-500" label="Especificaciones del Taller" />
            <section className="mt-8">
              <p className='text-white text-2xl'>
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
          <section className="pt-44">
            <article className='max-w-2xl '>
              <Title color="text-white" label="Nuestra Historia" />
              <p className='text-white text-lg mt-4'>
                Fundado en el corazón de la excelencia industrial, Taller CLOE comenzó con un solo elevador
                y la visión de redefinir el mantenimiento automotriz para vehículos de lujo y alto
                rendimiento. Hoy, somos el referente de autoridad técnica.
              </p>
            </article>
            <article className='grid grid-cols-3 gap-4 pb-22'>
              {items.map((item, index) => (
                <section key={index} className="mt-12 bg-[#0B1326] p-8 flex flex-col gap-4">
                  <i className='mb-4'>{item.icon}</i>
                  <div>
                    <Title color="text-white" label={item.title} className='text-main' />
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
          <section className="py-22 grid grid-flow-row auto-rows grid-cols-12 gap-4 bg-[#0B1326]">
            <img className="row-1 col-span-8 w-full max-h-[512px] object-cover " src={entorno} alt="Entorno del taller" />
            <div className="row-1 col-span-4 bg-[#44474C] flex flex-col p-6">
              <span className="p-4 rounded-sm text-gray-400 text-sm mb-4">INSTALCIONES</span>
              <div className="flex flex-col gap-4 ">
                <Title color="text-white" label="Un entorno estéril para el rendimiento" className="px-4" />
                <p className='text-main text-lg mt-4 px-4 mb-4'>
                  Nuestras instalaciones están diseñadas paraº
                  imitar un laboratorio aeroespacial. Superficies
                  limpias, control climático y bahías de diagnóstico
                  especializadas aseguran que cada vehículo sea
                  tratado en condiciones óptimas.
                </p>
                <ul className='p-4 text-main space-y-2'>
                  <li className='flex items-center gap-2'><OkSvg /> Entrada de aire filtrada por HEPA</li>
                  <li className='flex items-center gap-2'><OkSvg /> Suelos antiestáticos</li>
                  <li className='flex items-center gap-2'><OkSvg /> Sistemas de alineación láser</li>
                </ul>
              </div>
            </div>
            <img className="row-2 col-span-4 w-full object-cover" src={details} alt="Herramientas de alta gama" />
            <div className='row-2 col-span-8 '>asdasd</div>
          </section>
        </Container>
      </section>
    </main>
  )
}

export default AboutPage

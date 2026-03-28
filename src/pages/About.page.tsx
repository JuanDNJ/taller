import { useState, type FC, type JSX } from 'react'
import TitlePage from '@/components/TitlePage'
import img from '@/assets/images/maestro_técnico_trabajando.png'
import Container from '@/components/ui/Container'
import Title from '@/components/Title'
import entorno from '@/assets/images/entorno_taller.png'
import details from '@/assets/images/herramientas_de_alta_gama.png'
const PrecisionSvg = () => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6605 25.4999C9.41246 25.4999 6.5817 24.4307 4.16825 22.2922C1.7548 20.1538 0.365384 17.473 0 14.2499H2.2961C2.67495 16.8403 3.84081 18.9879 5.79369 20.6927C7.74658 22.3975 10.0355 23.2499 12.6605 23.2499C15.5855 23.2499 18.0668 22.2312 20.1043 20.1937C22.1418 18.1562 23.1605 15.6749 23.1605 12.7499C23.1605 9.82494 22.1418 7.3437 20.1043 5.3062C18.0668 3.2687 15.5855 2.24995 12.6605 2.24995C11.0221 2.24995 9.4865 2.61388 8.05381 3.34176C6.62112 4.06964 5.38747 5.07108 4.35285 6.34607H8.27591V8.59601H0.660631V0.980731H2.91058V4.53458C4.12788 3.09805 5.58556 1.98316 7.28363 1.18989C8.9817 0.396632 10.774 0 12.6605 0C14.4297 0 16.0874 0.334614 17.6336 1.00384C19.1797 1.67307 20.5278 2.58268 21.6778 3.73268C22.8278 4.88267 23.7374 6.23074 24.4066 7.77689C25.0759 9.32304 25.4105 10.9807 25.4105 12.7499C25.4105 14.5192 25.0759 16.1769 24.4066 17.723C23.7374 19.2691 22.8278 20.6172 21.6778 21.7672C20.5278 22.9172 19.1797 23.8268 17.6336 24.496C16.0874 25.1653 14.4297 25.4999 12.6605 25.4999ZM17.1634 18.7903L11.5788 13.2057V5.24995H13.8288V12.2942L18.7442 17.2096L17.1634 18.7903Z"
        fill="#FFB690" />
    </svg>
  )
}

const LegacySvg = () => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6605 25.4999C9.41246 25.4999 6.5817 24.4307 4.16825 22.2922C1.7548 20.1538 0.365384 17.473 0 14.2499H2.2961C2.67495 16.8403 3.84081 18.9879 5.79369 20.6927C7.74658 22.3975 10.0355 23.2499 12.6605 23.2499C15.5855 23.2499 18.0668 22.2312 20.1043 20.1937C22.1418 18.1562 23.1605 15.6749 23.1605 12.7499C23.1605 9.82494 22.1418 7.3437 20.1043 5.3062C18.0668 3.2687 15.5855 2.24995 12.6605 2.24995C11.0221 2.24995 9.4865 2.61388 8.05381 3.34176C6.62112 4.06964 5.38747 5.07108 4.35285 6.34607H8.27591V8.59601H0.660631V0.980731H2.91058V4.53458C4.12788 3.09805 5.58556 1.98316 7.28363 1.18989C8.9817 0.396632 10.774 0 12.6605 0C14.4297 0 16.0874 0.334614 17.6336 1.00384C19.1797 1.67307 20.5278 2.58268 21.6778 3.73268C22.8278 4.88267 23.7374 6.23074 24.4066 7.77689C25.0759 9.32304 25.4105 10.9807 25.4105 12.7499C25.4105 14.5192 25.0759 16.1769 24.4066 17.723C23.7374 19.2691 22.8278 20.6172 21.6778 21.7672C20.5278 22.9172 19.1797 23.8268 17.6336 24.496C16.0874 25.1653 14.4297 25.4999 12.6605 25.4999ZM17.1634 18.7903L11.5788 13.2057V5.24995H13.8288V12.2942L18.7442 17.2096L17.1634 18.7903Z"
        fill="#FFB690" />
    </svg>
  )
}
const OkSvg = () => {
  return (
   <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M6.06055 10.3153L11.1028 5.27305L10.3125 4.48268L6.06055 8.73461L3.92305 6.59711L3.13268 7.38747L6.06055 10.3153ZM7.12623 14.2499C6.14078 14.2499 5.2145 14.0629 4.3474 13.689C3.48029 13.315 2.72603 12.8074 2.08461 12.1663C1.44319 11.5251 0.935403 10.7712 0.561242 9.90448C0.187081 9.03776 0 8.11167 0 7.12623C0 6.14078 0.186998 5.2145 0.560993 4.3474C0.934988 3.48029 1.44255 2.72603 2.08369 2.08461C2.72482 1.44319 3.47875 0.935404 4.34547 0.561242C5.21219 0.187081 6.13827 0 7.12372 0C8.10917 0 9.03544 0.186998 9.90255 0.560993C10.7697 0.934988 11.5239 1.44255 12.1653 2.08369C12.8068 2.72482 13.3145 3.47875 13.6887 4.34547C14.0629 5.21219 14.2499 6.13827 14.2499 7.12372C14.2499 8.10917 14.0629 9.03544 13.689 9.90255C13.315 10.7696 12.8074 11.5239 12.1663 12.1653C11.5251 12.8068 10.7712 13.3145 9.90448 13.6887C9.03776 14.0629 8.11167 14.2499 7.12623 14.2499ZM7.12497 13.125C8.79997 13.125 10.2187 12.5437 11.3812 11.3812C12.5437 10.2187 13.125 8.79997 13.125 7.12497C13.125 5.44997 12.5437 4.03122 11.3812 2.86872C10.2187 1.70622 8.79997 1.12497 7.12497 1.12497C5.44997 1.12497 4.03122 1.70622 2.86872 2.86872C1.70622 4.03122 1.12497 5.44997 1.12497 7.12497C1.12497 8.79997 1.70622 10.2187 2.86872 11.3812C4.03122 12.5437 5.44997 13.125 7.12497 13.125Z"
        fill="#FFB690" />
</svg>
  )
}
type LegacyProps = { title: string, description: string, icon?: JSX.Element }
const AboutPage: FC = () => {
  const [items] = useState<LegacyProps[]>([
    {
      title: 'Taller de Precisión',
      description: 'Donde la excelencia automotriz se encuentra con la precisión quirúrgica.',
      icon: <PrecisionSvg />
    },
    {
      title: 'Cuidado Experto',
      description: 'Mecánica de grado quirúrgico para vehículos de lujo y alto rendimiento.',
      icon: <LegacySvg />
    },
    {
      title: 'Soluciones Personalizadas',
      description: 'Diseñamos soluciones a medida para cada vehículo, fusionando arte y ciencia automotriz.',
      icon: <LegacySvg />
    }
  ])

  const uiTitle = ('La Precisión es nuestro único Estándar').replace('único Estándar', "<span class='text-yellow-500'>ÚNICO ESTÁNDAR</span>")
  return (
    <main className=''>
      <section className='grid grid-cols-2 gap-8 bg-gradient-to-r from-gradient-default to-gradient-default/60'>
        <article className='flex flex-col gap-4 justify-center px-16'>
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
          <article className='bg-gradient-default absolute -bottom-12 -left-24 max-w-md p-8'>
            <Title label="Especificaciones del Taller" />
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
      <section className="bg-gradient-to-r from-gradient-default to-gradient-default/60">
        <Container>
          <section className="pt-44">
            <article className='max-w-2xl'>
              <Title label="Nuestra Historia" />
              <p className='text-white text-lg mt-4'>
                Fundado en el corazón de la excelencia industrial, Taller CLOE comenzó con un solo elevador
                y la visión de redefinir el mantenimiento automotriz para vehículos de lujo y alto
                rendimiento. Hoy, somos el referente de autoridad técnica.
              </p>
            </article>
            <article className='grid grid-cols-3 gap-4'>
              {items.map((item, index) => (
                <section key={index} className="mt-12 bg-[#0B1326] p-8">
                  {item.icon}
                  <Title label={item.title} />
                  <p className='text-white text-lg mt-4'>
                    {item.description}
                  </p>
                </section>
              ))}
            </article>
          </section>
          <section className="my-22 grid grid-flow-row auto-rows-[512px] grid-cols-12 gap-4 overflow-hidden">
            <img className="row-1 col-span-8 w-full max-h-[512px] object-cover " src={entorno} alt="Entorno del taller" />
            <div className="row-1 col-span-4 bg-black/50 flex flex-col p-6">
            <span className="p-4 rounded-sm text-gray-400 text-sm mb-4">INSTALCIONES</span>
              <div className="flex flex-col gap-4">
                <Title  label="Un entorno estéril para el rendimiento" className="px-4" />
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
          </section>
        </Container>
      </section>

    </main>
  )
}

export default AboutPage

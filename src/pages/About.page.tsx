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
  ]);

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
          <section className="my-22 grid grid-flow-row auto-rows-[512px] grid-cols-12 gap-2 overflow-hidden">
            <img className="row-1 col-span-8 w-full object-cover " src={entorno} alt="Entorno del taller" />
            <div className='row-1 col-span-4 bg-main'>9</div>
            <img className="row-2 col-span-4 w-full object-cover" src={details} alt="Herramientas de alta gama" />
          </section>
        </Container>
      </section>

    </main>
  )
}

export default AboutPage

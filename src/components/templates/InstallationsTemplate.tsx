import type { FC } from 'react'
import Container from '../ui/Container'
import Title from '../Title'
import { ABOUT } from '@/config'
import entorno from '@/assets/images/png/entorno_taller.png'
import OkSvg from '@/components/ui/icons/OkSvg'
import details from '@/assets/images/png/herramientas_de_alta_gama.png'

const IstalationsTemplate: FC = () => {
  return (
        <Container id="installations">
            <article className="flex flex-col mb-11 xl:mb-22 xl:grid xl:grid-flow-row xl:grid-cols-12 gap-4">
                <section className="row-1 col-span-8 relative">
                    <div className='absolute bg-black w-full h-full' />
                    <img className="md:w-full md:max-h-[512px] object-cover relative" src={entorno} alt="Entorno del taller" />
                    <article className='absolute top-1 xxs:top-8 xs:top-12 md:top-22 lg:top-44 lg:left-0 lg:max-w-sm lg:max-w-xl lg:m-4'>
                        <i className='text-yellow-500 px-4'>{ABOUT.history.installations.badgets.label.toUpperCase()}</i>
                        <Title label={ABOUT.history.installations.label} className="text-white px-4 xl:mt-6 text-xl md:text-4xl" />
                        <p className='text-white text-xxs xs:text-xs sm:text-xl md:text-2xl xl:mt-4 px-4'>
                            {ABOUT.history.installations.description}
                        </p>
                    </article>
                </section>
                <section className="row-1 col-span-4 flex flex-col">
                    <span className="p-4 rounded-sm text-yellow-500 text-sm mb-4">INSTALCIONES</span>
                    <article className="flex flex-col gap-4">
                        <Title label="Un entorno estéril para el rendimiento" className="px-4" />
                        <p className='text-typography text-lg mt-4 px-4 mb-8'>
                            Nuestras instalaciones están diseñadas paraº
                            imitar un laboratorio aeroespacial. Superficies
                            limpias, control climático y bahías de diagnóstico
                            especializadas aseguran que cada vehículo sea
                            tratado en condiciones óptimas.
                        </p>
                        <ul className='p-4 text-typography space-y-3'>
                            <li className='flex items-center gap-2'><OkSvg /> Entrada de aire filtrada por HEPA</li>
                            <li className='flex items-center gap-2'><OkSvg /> Suelos antiestáticos</li>
                            <li className='flex items-center gap-2'><OkSvg /> Sistemas de alineación láser</li>
                        </ul>
                    </article>
                </section>
                <div className='row-2 col-span-full flex flex-col xl:flex-row'>
                    <img className="aspect-video object-cover" src={details} alt="Herramientas de alta gama" />
                    <section className='flex-1 flex items-center justify-center flex-col gap-4 p-4'>
                        {ABOUT.history.installations.badgets && (
                            <article className='flex items-center justify-around md:px-4 w-full'>
                                <div className='flex flex-col gap-2'>
                                    <i className='text-center md:text-left text-yellow-500 text-2xl md:text-4xl font-bold'>{ABOUT.history.installations.badgets.completed_services.count}</i>
                                    <span className='text-typography text-center'>{ABOUT.history.installations.badgets.completed_services.label}</span>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <i className='text-center md:text-left text-yellow-500 text-2xl md:text-4xl font-bold'>{ABOUT.history.installations.badgets.complet.technics}</i>
                                    <span className='text-typography text-center'>{ABOUT.history.installations.badgets.complet.label}</span>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <i className='text-center md:text-left text-yellow-500 text-2xl md:text-4xl font-bold'>{ABOUT.history.installations.badgets.diagnostics.percent}</i>
                                    <span className='text-typography text-center'>{ABOUT.history.installations.badgets.diagnostics.label}</span>
                                </div>
                            </article>
                        )}
                    </section>
                </div>
            </article>
        </Container>
  )
}

export default IstalationsTemplate

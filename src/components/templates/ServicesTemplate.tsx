import { FaTools } from 'react-icons/fa'
import Aside from '../Aside'
import Title from '../Title'
import Template from '../ui/Template'
import { SERVICE_MOOK } from '@/config'
import generalMaintenance from '@/assets/images/png/general_maintenance.png'
import { Link } from 'react-router'
import { BsArrowRight } from 'react-icons/bs'
import mp4Frenos from '@/assets/mp4/Generación_de_Video_Sistema_de_Frenos.mp4'
import engineRepair from '@/assets/images/png/engine_repair.png'

const ServicesTemplate = () => {
  return (
        <Template id="services">
            {/* services */}
            <article className="my-8 grid grid-flow-row auto-rows-max md:auto-rows-min gap-4">
                <Aside>
                    <Title size='lg' label={SERVICE_MOOK.title} tag="h2" />
                </Aside>
                <section className="flex flex-col xl:flex-row gap-4 col-span-2">
                    <article className="flex-2 flex relative">
                        <img
                            srcSet={`${generalMaintenance} 1x, ${generalMaintenance} 2x`}
                            className="w-full h-auto object-cover aspect-video"
                            alt="image description"
                        />
                        <div className="absolute top-0 left-0 flex flex-col gap-2 justify-center h-full w-full px-4 lg:px-20 bg-black/30">
                            <div className="flex flex-col lg:mb-12 ">
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
                    <article className="flex-1 flex relative border-2 rounded border-yellow-500/30 overflow-hidden">
                        <div className="grid grid-flow-rows gap-4 h-full">
                            <video className="aspect-video h-full bg-black" src={mp4Frenos} controls></video>
                            <div className="bg-red-500flex flex-col justify-center gap-º2 p-4">
                                <h3 className="xl:pt-4 text-xl xl:text-3xl font-bold">{SERVICE_MOOK.brakes.label}</h3>
                                <p className='xl:pt-4'>
                                    {SERVICE_MOOK.brakes.description}
                                </p>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="flex flex-col lg:flex-row gap-4 col-span-2">
                    <article className="px-4 flex items-center border-2 rounded border-yellow-500/30 lg:px-14">
                        <div className="flex flex-col gap-4 py-8">
                            <h2 className="text-xl lg:text-4xl font-bold mb-4">
                                {SERVICE_MOOK.diagnostics.label}
                            </h2>
                            <p className="lg:text-xl">
                                {SERVICE_MOOK.diagnostics.description}
                            </p>
                        </div>
                    </article>
                    <article className="flex flex-col lg:flex-row items-center lg:px-14 gap-8 lg:gap-16 border-2 rounded border-yellow-500/30 min-h-80">
                        <div className="w-full flex flex-col justify-center gap-4 p-4">
                            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                                {SERVICE_MOOK.engine_repair.label}
                            </h2>
                            <p className="lg:text-xl">
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
  )
}

export default ServicesTemplate

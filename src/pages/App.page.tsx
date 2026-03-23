import type { FC } from 'react'
import TitlePage from '../components/TitlePage'
import { NavLink } from 'react-router'
import { BsArrowRight } from 'react-icons/bs'
import { FaTools } from 'react-icons/fa'
import { FaRegPlayCircle } from 'react-icons/fa'
import heroImage from '../assets/images/hero.png'
import engineRepair from '../assets/images/engine_repair.png'
import generalMaintenance from '../assets/images/general_maintenance.png'
import mp4Frenos from '../assets/Generación_de_Video_Sistema_de_Frenos.mp4'
import avatarUno from '../assets/images/avatar1.png'
import avatarTres from '../assets/images/avatar3.png'
import avatarCuatro from '../assets/images/avatar4.png'

const App: FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[62svh] sm:min-h-[55svh] md:min-h-[65svh]">
        <img
          srcSet={`${heroImage} 1x, ${heroImage} 2x`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="image description"
        />
        <article className="lg:bg-black/50 rounded-lg xl:pb-12 lg:pb-12 absolute max-w-full -top-10 left-0 sm:max-w-[66vw] sm:left-16 sm::top-4 md:max-w-[62vw] lg:max-w-[45vw] lg:top-8 xl:max-w-[40vw] xl:top-16 xl:left-50 flex flex-col pt-12">
          <TitlePage label="Taller Juan Valdivia, cuidado experto para tu vehículo" />
          <section className="mt-8">
            <p className="text-lg text-white px-4">
              Donde la fuerza industrial se une a la precisión de la ingeniería. Tratamos cada
              vehículo como una obra maestra de la mecánica y brindamos atención especializada que
              supera los estándares de fábrica.
            </p>
            <footer className="mt-8 px-4 md:px-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:justify-end">
              <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded">
                Contáctanos
              </button>
              <button className="px-4 py-2 bg-gray-500 text-white font-bold rounded">
                Ver tu proceso
              </button>
            </footer>
          </section>
        </article>
      </section>
      {/* Servicios */}
      <section className="max-w-7xl mx-auto my-8 grid grid-flow-row auto-rows-max md:auto-rows-min gap-4">
        <article className="mt-8 px-4 col-span-2">
          <h2 className="text-2xl font-bold text-white">Nuestros Servicios</h2>
        </article>
        <article className="flex flex-col lg:flex-row justify-between gap-4 col-span-2">
          <section className="lg:mt-8 w-full relative bg-black/50">
            <img
              srcSet={`${generalMaintenance} 1x, ${generalMaintenance} 2x`}
              className="w-full h-auto lg:h-96 object-cover aspect-video lg:rounded-lg"
              alt="image description"
            />
            <article className="absolute top-0 left-0 flex flex-col gap-2 justify-center h-full w-full px-4 lg:px-20 bg-black/50">
              <div className="flex flex-col lg:mb-12">
                <h2 className="text-2xl lg:text-4xl my-2 font-bold text-white">
                  Mantenimiento general
                </h2>
                <i className="hidden lg:inline absolute lg:top-4 lg:left-20 text-yellow-500">
                  <FaTools size={48} className="text-yellow-500" />
                </i>
                <i className="absolute lg:hidden top-1 left-4 text-yellow-500">
                  <FaTools size={24} className="text-yellow-500" />
                </i>
                <p className="text-white max-w-96 lg:text-xl">
                  Cuidado preventivo diseñado para mantener su máquina funcionando al máximo
                  rendimiento mediante rigurosas inspecciones multipunto.
                </p>
              </div>
              <NavLink
                to={'plans'}
                className="group lg:text-lg hover:text-orange-400 inline-flex items-center gap-4 text-orange-200 lg:mt-2"
              >
                Explorar los planes de mantenimiento{' '}
                <BsArrowRight size={24} className="group-hover:text-blue-400" />
              </NavLink>
            </article>
          </section>
          <section className="lg:mt-8 px-6 bg-black lg:rounded-lg relative flex flex-col gap-2 justify-center">
            <FaRegPlayCircle size={32} className="absolute top-8 left-4 text-yellow-500" />
            <article className="flex flex-col gap-4">
              <video className="w-full max-h-72" src={mp4Frenos} controls></video>
              <div className="flex flex-col gap-2 bg-black/50 p-4">
                <h3 className="text-xl lg:text-2xl font-bold text-white">Sistemas de frenos</h3>
                <p className="text-white">
                  Soluciones de potencia de frenado de alto rendimiento y calibración de seguridad.
                </p>
              </div>
            </article>
          </section>
        </article>
        <article className="flex flex-col lg:flex-row gap-4 col-span-2">
          <section className="px-4 bg-gray-800 flex items-center lg:rounded-lg lg:px-14">
            <div className="flex flex-col gap-4 py-8">
              <h2 className="text-xl lg:text-4xl font-bold mb-4 text-white">
                Diagnóstico avanzado
              </h2>
              <p className="text-white lg:text-xl">
                Precisión milimétrica utilizando la última tecnología de escaneo y telemetría
                digital.
              </p>
            </div>
          </section>
          <section className="flex flex-col lg:flex-row items-center lg:px-14 gap-8 lg:gap-16 bg-gray-800 min-h-80 lg:rounded-lg">
            <article className="w-full flex flex-col justify-center gap-4 p-4">
              <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white">
                Reparación de motores
              </h2>
              <p className="text-white lg:text-xl">
                Reconstrucciones completas y restauración de componentes utilizando piezas con
                especificaciones OEM y experiencia de un técnico maestro.
              </p>
            </article>
            <img
              srcSet={`${engineRepair} 1x, ${engineRepair} 2x`}
              className="lg:w-40 lg:h-40 object-cover lg:rounded-lg"
              alt="image description"
            />
          </section>
        </article>
      </section>
      {/* ITV */}
      <section className="max-w-7xl mx-auto grid grid-flow-row md:grid-flow-col my-8">
        <article className="mt-8 px-4 flex flex-wrap items-center lg:col-span-2 gap-8 lg:gap-0">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-white">
              ¿Listo para la próxima ITV?
            </h2>
            <p className="text-lg lg:text-xl text-white">
              En el taller Juan Valdivia, nos especializamos en preparar tu vehículo para la
              Inspección Técnica de Vehículos (ITV). Nuestro equipo de expertos realizará una
              revisión exhaustiva de tu automóvil, asegurándose de que cumpla con todos los
              requisitos necesarios para pasar la ITV sin problemas. Desde la revisión de frenos y
              luces hasta la verificación de emisiones, nos encargamos de cada detalle para que
              puedas conducir con confianza y seguridad.
            </p>
          </div>
          <div className="bg-gray-950 rounded-lg p-4">
            <section className="grid grid-flow-col relative w-sm items-center gap-4">
              <div className="group absolute left-0 z-1 flex items-center gap-2 cursor-pointer">
                <img
                  src={avatarUno}
                  alt="avatar"
                  width={32}
                  height={32}
                  className="group-hover:-translate-y-1 peer rounded-full w-12 h-12 object-cover object-center bg-cyan-300 border-3 border-white transition-transform duration-300"
                />
                <blockquote className="mb-4 hidden w-92 peer-hover:inline peer-hover:absolute peer-hover:bottom-full peer-hover:left-4 text-xs p-2 border border-yellow-500 text-white rounded-lg bg-black">
                  "Gracias al taller Juan Valdivia, pasé la ITV sin ningún problema. Su atención al
                  detalle y profesionalismo son excepcionales. ¡Recomiendo sus servicios a todos los
                  conductores!"
                </blockquote>
              </div>
              <div className="group absolute left-7 z-2 flex items-center gap-2 cursor-pointer">
                <img
                  src={avatarTres}
                  alt="avatar"
                  width={32}
                  height={32}
                  className="group-hover:-translate-y-1 peer rounded-full w-12 h-12 object-cover object-center bg-cyan-300 border-3 border-white transition-transform duration-300"
                />
                <blockquote className="mb-5 hidden w-92 peer-hover:inline peer-hover:absolute peer-hover:bottom-full peer-hover:left-4 text-xs p-2 border border-yellow-500 text-white rounded-lg bg-black">
                  "Excelente servicio y atención al cliente. Mi coche pasó la ITV sin problemas
                  gracias a su profesionalismo."
                </blockquote>
              </div>
              <div className="group absolute left-14 z-3 flex items-center gap-2 relative cursor-pointer">
                <img
                  src={avatarCuatro}
                  alt="avatar"
                  width={32}
                  height={32}
                  className="group-hover:-translate-y-1 peer rounded-full w-12 h-12 object-cover object-center bg-cyan-300 border-3 border-white transition-transform duration-300"
                />
                <blockquote className="mb-6 hidden w-92 peer-hover:inline peer-hover:absolute peer-hover:bottom-full peer-hover:left-4 text-xs p-2 border border-yellow-500 text-white rounded-lg bg-black">
                  "El taller Juan Valdivia me ayudó a preparar mi coche para la ITV y el proceso fue
                  muy fácil. Su equipo es muy profesional y se nota que saben lo que hacen."
                </blockquote>
              </div>
              <span className="mb-2 text-center">Lo que dicen nuestros clientes</span>
            </section>
          </div>
        </article>
        <article className="mt-8 px-4">
          <h2 className="text-2xl font-bold mb-4 text-white">¿Reservar una cita?</h2>
          <span>
            Rellena el formulario y nos pondremos en contacto contigo para agendar tu cita.
          </span>
          <form className="mt-4 flex flex-col space-y-2 bg-black/50 p-4 rounded-lg">
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full mt-4 px-4 py-2 rounded bg-gray-800 text-white"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full mt-4 px-4 py-2 rounded bg-gray-800 text-white"
            />
            <input
              type="tel"
              placeholder="Número de teléfono"
              className="w-full mt-4 px-4 py-2 rounded bg-gray-800 text-white"
            />
            <textarea
              placeholder="Mensaje"
              className="w-full mt-4 px-4 py-2 rounded bg-gray-800 text-white"
            ></textarea>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-yellow-500 text-black font-bold rounded"
            >
              Enviar
            </button>
          </form>
        </article>
      </section>
    </main>
  )
}

export default App

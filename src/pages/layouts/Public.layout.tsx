import type { FC } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { NavLink, Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Header from '../../components/Header'
import { FaGithubAlt } from 'react-icons/fa6'
import { FaGoogle } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'

type PublicLayoutProps = {}

const PublicLayout: FC<PublicLayoutProps> = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer className="flex flex-col bg-gray-900 py-8">
        <article className="mt-8 px-4 flex flex-wrap lg:flex-row lg:gap-8">
          <header className="mb-4 flex flex-col items-center w-full ">
            <h2 className="text-2xl font-bold mb-4 text-white">Taller Cloe</h2>
            <hr className="border-b-4 border-cyan-500 mb-4 w-full max-w-96 rounded" />
          </header>
          <section className="my-8 flex justify-evenly w-full flex-col md:flex-row">
            <section className="mb-4 flex flex-col items-center lg:items-start">
              <header>
                <h3 className="text-2xl font-bold text-white">Enlaces útiles</h3>
                <hr className="border-b-2 border-yellow-500 mb-4 rounded" />
              </header>
              <NavLink
                to={'plans'}
                className="group hover:text-orange-400 gap-4 text-orange-200 mt-2"
              >
                Terminos del servicio
              </NavLink>
              <NavLink
                to={'services'}
                className="group hover:text-orange-400 gap-4 text-orange-200 mt-2"
              >
                Politica de privacidad
              </NavLink>
              <NavLink
                to={'contact'}
                className="group hover:text-orange-400 gap-4 text-orange-200 mt-2"
              >
                FAQ
              </NavLink>
            </section>
            <section className="mb-4 flex flex-col items-center lg:items-start">
              <header>
                <h3 className="text-2xl font-bold text-white">Nuestros servicios</h3>
                <hr className="border-b-2 border-yellow-500 mb-4 rounded" />
              </header>
              <NavLink
                to={'plans'}
                className="group hover:text-orange-400 gap-4 text-orange-200 mt-2"
              >
                Explorar los planes de mantenimiento
              </NavLink>
              <NavLink
                to={'services'}
                className="group hover:text-orange-400 gap-4 text-orange-200 mt-2"
              >
                Conoce nuestros servicios
              </NavLink>
              <NavLink
                to={'contact'}
                className="group hover:text-orange-400 gap-4 text-orange-200 mt-2"
              >
                Contáctanos
              </NavLink>
            </section>
            <section className="mb-4 flex flex-col items-center lg:items-start">
              <header>
                <h3 className="text-2xl font-bold text-white">Donde estamos?</h3>
                <hr className="border-b-2 border-yellow-500 mb-4 rounded" />
              </header>
              <iframe
                className="rounded-lg xxs:w-full xxs:h-64 md:w-96 md:h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.9473595155355!2d2.039640220360484!3d41.34834331717986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49b8b8cd98a33%3A0x50075b189548e24f!2sAyuntamiento%20de%20Sant%20Boi%20de%20Llobregat!5e0!3m2!1ses!2ses!4v1774173660556!5m2!1ses!2ses"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </section>
        </article>

        <section className="max-w-2xl mx-auto">
          <p className="text-center text-sm text-white mt-8 mb-4">
            © 2024 Taller Juan Valdivia. Todos los derechos reservados.
          </p>
          <article className="flex justify-center space-x-12">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithubAlt size={32} />
            </a>
            <a
              href="https://www.google.com/maps/place/Sant+Boi+de+Llobregat/@41.3483433,2.0396402,17z/data=!3m1!4b1!4m5!3m4!1s0x12a49b8b8cd98a33:0x50075b189548e32f!8m2!3d41.3483433!4d2.0396402"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGoogle size={32} />
            </a>
            <a
              href="https://www.tallerjuanvaldivia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaShareAlt size={32} />
            </a>
          </article>
          <article className="mt-4 px-4 text-center text-sm text-gray-400">
            <p>
              Este sitio web es solo para fines informativos y no representa una empresa real.
              Cualquier similitud con negocios reales es pura coincidencia.
            </p>
          </article>
        </section>
      </footer>
      <ToastContainer
        containerId={'public-toast'}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default PublicLayout

import type { FC } from "react";
import { FaGithubAlt, FaGoogle, FaShareAlt } from "react-icons/fa";
import { NavLink } from "react-router";
import { CONTACT, OURS_SERVICES_LINKS, TITLE_APP, USEFUL_LINKS } from "../../config";
import P from "../../components/P";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col bg-footer py-8">
      <section className="w-full max-w-7xl mx-auto">
        <article className="mt-8 px-4 flex flex-wrap lg:flex-row lg:gap-8">
          <header className="mb-4 flex flex-col items-center w-full ">
            <h2 className="text-2xl font-bold mb-4 text-white">{TITLE_APP}</h2>
            <hr className="border-b-4 border-cyan-500 mb-4 w-full max-w-96 rounded" />
          </header>
          <section className="my-8 flex justify-between w-full flex-col md:flex-row">
            <section className="mb-4 flex flex-col items-center lg:items-start">
              <header>
                <h3 className="text-2xl font-bold text-white">Enlaces útiles</h3>
                <hr className="border-b-2 border-yellow-500 mb-4 rounded" />
              </header>
              {USEFUL_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="group hover:text-orange-400 gap-4 text-orange-200 mt-2"
                > 
                  {link.label}
                </NavLink>
              ))}
            
            </section>
            <section className="mb-4 flex flex-col items-center lg:items-start">
              <header>
                <h3 className="text-2xl font-bold text-white">Nuestros servicios</h3>
                <hr className="border-b-2 border-yellow-500 mb-4 rounded" />
              </header>
              {OURS_SERVICES_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="group hover:text-orange-400 gap-4 text-orange-200 mt-2"
                >
                  {link.label}
                </NavLink>
              ))}
            </section>
            <section className="mb-4 flex flex-col items-center lg:items-start">
              <header>
                <h3 className="text-2xl font-bold text-white">{CONTACT.label}</h3>
                <hr className="border-b-2 border-yellow-500 mb-4 rounded" />
              </header>
              <iframe
                className="rounded-lg xxs:w-full xxs:h-64 md:w-96 md:h-64"
                src={CONTACT.google_maps}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </section>
        </article>
        <article className="max-w-2xl mx-auto">
          <p className="text-center text-sm text-info mt-8 mb-4">
            © 2026 {TITLE_APP}. Todos los derechos reservados.
          </p>
          <article className="flex justify-center space-x-12">
            <a
              href="https://github.com/JuanDNJ/taller"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithubAlt size={32} />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGoogle size={32} />
            </a>
            <a
              href="https://www.cloe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaShareAlt size={32} />
            </a>
          </article>
          <article className="mt-4 px-4 ">
            <P className="text-center text-sm text-warning">
              Este sitio web es solo para fines informativos y no representa una empresa real.
              Cualquier similitud con negocios reales es pura coincidencia.
            </P>
          </article>
        </article>
      </section>
    </footer>
  )
}

export default Footer;

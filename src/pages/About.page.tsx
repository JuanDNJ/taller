import type { FC } from "react";
import TitlePage from "../components/TitlePage";

const AboutPage: FC = () => {
    return (
        <main>
            <TitlePage label="About" />
            <section className="mt-8 px-4">
                <p>Este proyecto es un sistema de gestión de vehículos para el taller Juan Valdivia. Permite a los usuarios agregar, editar y eliminar vehículos, así como gestionar las reparaciones y mantenimientos asociados a cada uno.</p>
                <p>El sistema está construido utilizando React para el frontend y se espera que tenga un backend para manejar la lógica de negocio y la persistencia de datos. El objetivo es proporcionar una herramienta eficiente para que el taller pueda organizar su trabajo y mejorar la experiencia de sus clientes.</p>
            </section>
        </main>
    )
}

export default AboutPage;

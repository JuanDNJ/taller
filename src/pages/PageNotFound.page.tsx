import GoTo from '../components/GoTo'

const PageNotFound: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen px-4">
      <h1 className="text-2xl lg:text-4xl font-bold">
        <span className="text-red-300 text-4xl">404</span> - Página no encontrada
      </h1>
      <p className="mt-4">La página que estás buscando no existe.</p>
      <GoTo to="/">Volver al inicio</GoTo>
    </section>
  )
}

export default PageNotFound

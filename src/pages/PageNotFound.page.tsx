import GoTo from '@/components/atoms/GoTo'
import Template from '@/components/molecules/Template'

const PageNotFound: React.FC = () => {
  return (
    <Template id="not-found-template" tag="main" container='full' className='flex flex-col items-center justify-center gap-4 text-center py-22'>
      <section className="flex flex-col items-center justify-center w-full h-screen px-4">
        <h1 className="text-2xl lg:text-4xl font-bold">
          <span className="text-red-300 text-4xl">404</span> - Página no encontrada
        </h1>
        <p className="mt-4">La página que estás buscando no existe.</p>
        <GoTo to="/">Volver al inicio</GoTo>
      </section>
    </Template>
  )
}

export default PageNotFound

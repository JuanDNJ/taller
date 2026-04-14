import type { FC } from 'react'
import { Link } from 'react-router'

const Signin: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-4">
       <article>
        <h1 className="text-2xl font-bold">Página de Inicio de Sesión</h1>
       </article>
        <footer className="flex items-center justify-center h-screen">
            <Link to="/signup" className='border-transparent bg-gray-600 hover:bg-tertiary/80 py-1 px-3 text-white rounded-md' >No tienes cuenta? Regístrate</Link>
        </footer>
    </section>
  )
}

export default Signin

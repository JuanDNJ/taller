import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAccount } from '@/context/hooks/useAccount'
import { ToastContainer } from 'react-toastify'
import Header from '@/pages/layouts/Header'
import Footer from '@/pages/layouts/Footer'

const PrivateLayout: FC = () => {
  const { user } = useAccount()

  if (!user) return <Navigate to="/" replace />

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        containerId={'private-toast'}
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

export default PrivateLayout

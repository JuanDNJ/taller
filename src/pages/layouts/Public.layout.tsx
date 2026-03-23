import 'react-toastify/dist/ReactToastify.css'
import type { FC } from 'react'
import {  Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Header from './Header'
import Footer from './Footer'

const PublicLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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

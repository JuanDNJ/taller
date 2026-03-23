import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'
// Layouts and other Components
const PrivateLayout = lazy(() => import('../pages/layouts/Private.layout'))
const PublicLayout = lazy(() => import('../pages/layouts/Public.layout'))
// Pages
const App = lazy(() => import('../pages/App.page'))
const Account = lazy(() => import('../pages/authorized/Account.page'))
const AboutPage = lazy(() => import('../pages/About.page'))
const ServicesPage = lazy(() => import('../pages/Services.page'))
const ContactPage = lazy(() => import('../pages/Contact.page'))
const PageNotFound = lazy(() => import('../pages/PageNotFound.page'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: '',
        element: <App />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
  {
    path: '/account',
    element: <PrivateLayout />,
    children: [
      {
        path: '',
        element: <Account />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

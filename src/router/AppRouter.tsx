import type { FC } from 'react'
import GlobalProvider from '../context/providers/GloblaProvider'
import AccountProvider from '../context/providers/AccountProvider'
import { RouterProvider } from 'react-router'
import { router } from '.'

const AppRouter: FC = () => {
  return (
    <GlobalProvider>
      <AccountProvider>
        <RouterProvider router={router} />
      </AccountProvider>
    </GlobalProvider>
  )
}

export default AppRouter

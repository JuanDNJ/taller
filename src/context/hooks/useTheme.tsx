import { useContext } from 'react'
import GlobalContext from '@/context/GlobalContext'

export const useTheme = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useTheme must be used within a GlobalProvider')
  }
  return context
}

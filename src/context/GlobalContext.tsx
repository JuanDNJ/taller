import { createContext } from 'react'
import type { Theme } from '@/types/inex'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
}

const GlobalContext = createContext<ThemeContextType | null>(null)

export default GlobalContext
export type { ThemeContextType }

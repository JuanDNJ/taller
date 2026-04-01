import type { FC } from 'react'
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi'
import { useTheme } from '@/context/hooks/useTheme'
import type { Theme } from '@/types/inex'

const options: { value: Theme; icon: typeof FiSun; label: string }[] = [
  { value: 'light', icon: FiSun, label: 'Claro' },
  { value: 'dark', icon: FiMoon, label: 'Oscuro' },
  { value: 'system', icon: FiMonitor, label: 'Sistema' }
]

const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-1 rounded-full border border-yellow-500/40 p-0.5">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          title={label}
          className={`cursor-pointer rounded-full p-1.5 transition-colors ${
            theme === value
              ? 'bg-yellow-500 text-black'
              : 'text-color-base hover:bg-yellow-500/20'
          }`}
        >
          <Icon size={16} />
        </button>
      ))}
    </div>
  )
}

export default ThemeToggle

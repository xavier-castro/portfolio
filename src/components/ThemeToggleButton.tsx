import { useEffect, useState } from 'react'
import { IoMdSunny, IoMdMoon } from 'react-icons/io/index'

const themes = ['light', 'dark']

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })
  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.remove('light')
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div
      className="inline-flex p-[2px] items-center cursor-pointer rounded-3xl dark:bg-zinc-600 bg-orange-300"
      onClick={toggleTheme}
    >
      {themes.map(t => {
        const checked = t === theme
        return (
          <button
            key={t}
            className={`${checked ? 'text-white' : 'text-black'}`}
            aria-label={`Switch to ${t} mode`}
          >
            {t === 'light' ? <IoMdSunny /> : <IoMdMoon />}
          </button>
        )
      })}
    </div>
  ) : (
    <div />
  )
}

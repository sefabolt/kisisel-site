import { createContext, useContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import data from '../data/data.json'

const SettingsContext = createContext()

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const [language, setLanguage] = useLocalStorage('language', 'en')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const toggleLanguage = () => setLanguage(language === 'en' ? 'tr' : 'en')

  const content = data[language]

  return (
    <SettingsContext.Provider
      value={{ theme, language, content, toggleTheme, toggleLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  )
}


export const useSettings = () => useContext(SettingsContext)
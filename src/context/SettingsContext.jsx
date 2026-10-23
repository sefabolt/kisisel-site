import { createContext, useContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import data from '../data/data.json'
import api from '../services/api'

const SettingsContext = createContext()

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const [language, setLanguage] = useLocalStorage('language', 'en')
  const [content, setContent] = useState(data[language])

  // Tema: html etiketine dark class'ı ekler
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Dil: seçilen dilin verisini Axios ile POST eder, cevabı gösterir
  useEffect(() => {
    let cancelled = false
    const mockData = data[language]

    setContent(mockData)

    api
      .post('/users', mockData)
      .then((response) => {
        const { id, createdAt, ...rest } = response.data
        if (!cancelled && rest.hero) setContent(rest)
      })
      .catch((error) => console.error('API hatası:', error))

    return () => {
      cancelled = true
    }
  }, [language])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const toggleLanguage = () => setLanguage(language === 'en' ? 'tr' : 'en')

  return (
    <SettingsContext.Provider
      value={{ theme, language, content, toggleTheme, toggleLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSettings = () => useContext(SettingsContext)
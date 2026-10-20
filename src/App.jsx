import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSettings } from './context/SettingsContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const { theme } = useSettings()

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" theme={theme} />
    </div>
  )
}

export default App
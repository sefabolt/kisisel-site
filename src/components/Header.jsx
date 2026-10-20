import { useSettings } from '../context/SettingsContext'

export default function Header() {
  const { theme, content, toggleTheme, toggleLanguage } = useSettings()
  const isDark = theme === 'dark'

  return (
    <header className="max-w-5xl mx-auto px-6 pt-6">
      {/* Üst satır: dark mode anahtarı ve dil butonu */}
      <div className="flex items-center justify-end gap-3 text-xs font-semibold tracking-wider">
        <button
          onClick={toggleTheme}
          role="switch"
          aria-checked={isDark}
          aria-label={content.ui.darkMode}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="w-10 h-5 rounded-full bg-primary flex items-center px-0.5">
            <span
              className={`w-4 h-4 rounded-full bg-yellow-300 transition-transform ${
                isDark ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </span>
          <span className="text-slate-600 dark:text-slate-300">
            {content.ui.darkMode}
          </span>
        </button>

        <span className="text-slate-400">|</span>

        <button
          onClick={toggleLanguage}
          className="text-primary dark:text-indigo-300 cursor-pointer"
        >
          {content.ui.switchLang}
        </button>
      </div>

      {/* Menü */}
      <nav
        aria-label="Ana menü"
        className="flex items-center justify-end gap-4 md:gap-8 mt-6 text-sm text-slate-600 dark:text-slate-300"
      >
        <a href="#skills" className="hover:text-primary">{content.ui.nav.skills}</a>
        <a href="#projects" className="hover:text-primary">{content.ui.nav.projects}</a>
        <a
          href="#contact"
          className="border border-primary text-primary dark:text-indigo-300 dark:border-indigo-300 rounded px-5 py-2 hover:bg-primary hover:text-white transition-colors"
        >
          {content.ui.nav.hireMe}
        </a>
      </nav>
    </header>
  )
}
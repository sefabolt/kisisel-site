import { useState } from 'react'
import { useSettings } from '../context/SettingsContext'
import ContactModal from './ContactModal'

export default function Hero() {
  const { content } = useSettings()
  const { hero } = content
  const [open, setOpen] = useState(false)

  return (
    <section className="max-w-5xl mx-auto px-6 py-8 md:py-12 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <div className="flex items-center gap-3 text-sm text-primary dark:text-indigo-300">
          <span className="w-16 h-px bg-primary dark:bg-indigo-300" />
          <span>{hero.name}</span>
        </div>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight max-w-md text-slate-900 dark:text-white">
          <span className="underline decoration-accent decoration-4 underline-offset-4">
            {hero.title}
          </span>
        </h1>

        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
          {hero.text}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <button
            onClick={() => setOpen(true)}
            className="bg-primary text-white rounded px-5 py-2 border border-primary cursor-pointer"
          >
            {hero.hireMe}
          </button>

          <a
            href={content.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-primary text-primary dark:text-indigo-300 dark:border-indigo-300 rounded px-4 py-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
            </svg>
            {hero.github}
          </a>

          <a
            href={content.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-primary text-primary dark:text-indigo-300 dark:border-indigo-300 rounded px-4 py-2"
          >
            <span className="font-bold">in</span>
            {hero.linkedin}
          </a>
        </div>
      </div>

      <img
        src="/hero.jpg"
        alt={hero.name}
        className="w-full h-72 md:h-80 object-cover rounded-xl shadow-2xl"
      />

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </section>
  )
}
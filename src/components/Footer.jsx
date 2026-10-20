import { useSettings } from '../context/SettingsContext'

export default function Footer() {
  const { content } = useSettings()
  const { footer } = content

  return (
    <footer
      id="contact"
      className="bg-slate-100 dark:bg-slate-800 mt-8"
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold max-w-xs leading-snug text-slate-900 dark:text-white">
          {footer.title}
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-sm">
          <a
            href={`mailto:${footer.email}`}
            className="underline text-rose-700 dark:text-rose-300"
          >
            👉 {footer.email}
          </a>

          <nav aria-label="Footer" className="flex gap-4">
            <a href={content.links.blog} target="_blank" rel="noreferrer" className="text-slate-900 dark:text-white">
              {footer.blog}
            </a>
            <a href={content.links.github} target="_blank" rel="noreferrer" className="text-emerald-600">Github</a>
            <a href={content.links.linkedin} target="_blank" rel="noreferrer" className="text-sky-600">Linkedin</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
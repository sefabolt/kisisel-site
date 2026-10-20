import { useSettings } from '../context/SettingsContext'

export default function Skills() {
  const { content } = useSettings()
  const { skills } = content

  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-12 border-b border-indigo-100 dark:border-slate-700"
    >
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
        {skills.title}
      </h2>

      <div className="mt-6 grid md:grid-cols-3 gap-8">
        {skills.items.map((item) => (
          <article key={item.name}>
            <h3 className="text-xl text-primary dark:text-indigo-300">
              {item.name}
            </h3>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
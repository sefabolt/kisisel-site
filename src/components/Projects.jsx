import { useSettings } from '../context/SettingsContext'

export default function Projects() {
  const { content } = useSettings()
  const { projects } = content

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
        {projects.title}
      </h2>

      <div className="mt-6 grid md:grid-cols-3 gap-8">
        {projects.items.map((project, index) => (
          <article key={project.name}>
            <img
              src={`/project${index + 1}.jpg`}
              alt={project.name}
              className="w-full h-44 object-cover"
            />
            <h3 className="mt-4 text-xl text-primary dark:text-indigo-300">
              {project.name}
            </h3>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {project.text}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs border border-primary text-primary dark:text-indigo-300 dark:border-indigo-300 rounded px-3 py-0.5"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-between text-xs">
              <a href={project.github} className="underline text-primary dark:text-indigo-300">
                Github
              </a>
              <a href={project.site} className="underline text-primary dark:text-indigo-300">
                {projects.viewSite}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
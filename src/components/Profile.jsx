import { useSettings } from '../context/SettingsContext'

export default function Profile() {
  const { content } = useSettings()
  const { profile } = content

  return (
    <section
      id="profile"
      className="max-w-5xl mx-auto px-6 py-12 border-b border-indigo-100 dark:border-slate-700"
    >
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
        {profile.title}
      </h2>

      <div className="mt-6 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl text-primary dark:text-indigo-300">
            {profile.subtitle}
          </h3>
          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-8 gap-y-3 text-sm">
            {profile.info.map((row) => (
              <div key={row.label} className="contents">
                <dt className="font-semibold text-slate-900 dark:text-white">
                  {row.label}
                </dt>
                <dd className="text-slate-600 dark:text-slate-300">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="text-xl text-primary dark:text-indigo-300">
            {profile.aboutTitle}
          </h3>
          {profile.about.map((paragraph, index) => (
            <p
              key={index}
              className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
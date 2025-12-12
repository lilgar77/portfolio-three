import React from 'react'

const languages = ['C / C++', 'PHP', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML / CSS', 'Lua', 'Swift', 'Kotlin', 'Flutter']
const frameworks = ['React', 'Angular', 'Symfony','Laravel', 'Three.js', 'API Platform']
const tools = ['Git', 'Docker', 'API REST', 'Postman', 'Vite', 'Kubernetes']
const databases = ['Oracle', 'SQLite', 'MySQL']
const envs = ['VS Code', 'PHPStorm', 'Cursor']

export function CompetencesLangagesCard() {
  return (
    <div className="w-40 max-w-full rounded-2xl border border-sky-500/40 bg-slate-950/95 px-3 py-1.5 text-[0.6rem] text-sky-50 shadow-lg backdrop-blur-lg">
      <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-sky-300/90">
        Langages
      </p>
      <div className="flex flex-wrap gap-1.5">
        {languages.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[0.5rem] font-medium text-sky-100 border border-sky-500/40"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function CompetencesFrameworksCard() {
  return (
    <div className="w-40 max-w-full rounded-2xl border border-sky-400/40 bg-slate-950/95 px-3 py-1.5 text-[0.6rem] text-sky-50 shadow-lg backdrop-blur-lg">
      <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-sky-300/90">
        Frameworks
      </p>
      <div className="flex flex-wrap gap-1.5">
        {frameworks.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[0.5rem] font-medium text-sky-100 border border-sky-400/40"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function CompetencesOutilsCard() {
  return (
    <div className="w-70 max-w-full space-y-2 rounded-2xl border border-slate-500/50 bg-slate-950/95 px-3 py-1.5 text-[0.6rem] text-sky-50 shadow-lg backdrop-blur-lg">
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-sky-300/90">
        Outils · Données · IA
      </p>

      <div className="flex flex-wrap gap-1.5">
        {tools.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[0.5rem] font-medium text-sky-100 border border-slate-500/40"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {databases.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[0.5rem] font-medium text-sky-100 border border-emerald-400/40"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {envs.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[0.5rem] font-medium text-sky-100 border border-indigo-400/40"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-2 gap-2 text-[0.5rem] text-slate-200/90">
        <div className="rounded-xl border border-sky-500/30 bg-slate-950/95 px-2 py-1.5">
          <p className="mb-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-sky-300/90">
            Automatisation
          </p>
          <p>n8n · workflows automatisés et intégration d&apos;API.</p>
        </div>
        <div className="rounded-xl border border-sky-500/30 bg-slate-950/95 px-2 py-1.5">
          <p className="mb-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-sky-300/90">
            Conception
          </p>
          <p>Qt · UML · modélisation avant développement.</p>
        </div>
      </div>
    </div>
  )
}

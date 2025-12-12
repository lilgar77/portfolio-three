import React from 'react'

export function AboutProfilCard() {
  return (
    <div className="w-56 sm:w-64 max-w-full rounded-2xl border border-sky-400/60 bg-slate-950/95 px-3 sm:px-4.5 py-2.5 sm:py-3 text-[0.7rem] sm:text-[0.75rem] text-sky-50 shadow-xl backdrop-blur-lg">
      <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-sky-300/80">Profil</p>
      <h3 className="text-sm sm:text-base font-bold text-sky-100">
        Lilian Garcia · Étudiant développeur Full‑Stack
      </h3>
      <p className="mt-1 text-[0.65rem] sm:text-[0.7rem] text-slate-300">
        Développeur Full‑Stack & IA, spécialisé en applications web et automatisation. Curieux et créatif,
        j&apos;aime transformer les idées en solutions concrètes et performantes.
      </p>
    </div>
  )
}

export function AboutFormationCard() {
  return (
    <div className="w-56 sm:w-64 max-w-full rounded-2xl border border-sky-500/50 bg-slate-950/95 px-3 sm:px-4.5 py-2.5 sm:py-3 text-[0.7rem] sm:text-[0.75rem] text-sky-50 shadow-xl backdrop-blur-lg">
      <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-sky-300/80">Formation</p>
      <div className="text-[0.65rem] sm:text-[0.7rem] text-slate-200/95 space-y-0.5">
        <div className="pt-1">
          <p className="font-medium">Master Développement Full‑Stack · Sup de Vinci</p>
          <p className="text-[0.6rem] sm:text-[0.65rem] text-slate-300">2026 - 2028</p>
        </div>
        <div>
          <p className="font-medium">BUT Informatique · IUT de La Rochelle</p>
          <p className="text-[0.6rem] sm:text-[0.65rem] text-slate-300">
            Parcours A · Développeur full‑stack · 2022 – 2026
          </p>
        </div>
        <div className="pt-1">
          <p className="font-medium">Bac STI2D · Lycée La Fayette</p>
          <p className="text-[0.6rem] sm:text-[0.65rem] text-slate-300">Option Systèmes d&apos;Information et Numérique (SIN) · 2022</p>
        </div>
      </div>
    </div>
  )
}

export function AboutExperiencesCard() {
  return (
    <div className="w-60 sm:w-[17rem] max-w-full rounded-2xl border border-sky-500/50 bg-slate-950/95 px-3 sm:px-4.5 py-2.5 sm:py-3 text-[0.7rem] sm:text-[0.75rem] text-sky-50 shadow-xl backdrop-blur-lg">
      <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-sky-300/80">Expériences</p>
      <div className="text-[0.65rem] sm:text-[0.7rem] text-slate-200/95 space-y-1">
        <div>
          <p className="font-medium">USTS · Paris</p>
          <p className="text-[0.6rem] sm:text-[0.65rem] text-slate-300">
            Alternance 3ème année BUT Informatique (juil. 2025 – à ce jour)
          </p>
        </div>
        <div>
          <p className="text-[0.6rem] sm:text-[0.65rem] text-slate-300">
            Développeur Full‑Stack & IA · création d&apos;applications web et d&apos;agents d&apos;automatisation IA
            (React, Symfony, n8n...).
          </p>
        </div>
        <div className="pt-1 border-t border-slate-700/60">
          <p className="text-[0.6rem] sm:text-[0.65rem] text-slate-300">
            Stage 2ème année BUT Informatique chez USTS (avr. 2025 – juin 2025) · même stack et missions.
          </p>
        </div>
      </div>
    </div>
  )
}

export function AboutLanguesSoftSkillsCard() {
  return (
    <div className="w-52 sm:w-60 max-w-full rounded-2xl border border-slate-500/50 bg-slate-950/95 px-3 sm:px-4 py-2 sm:py-2.5 text-[0.7rem] sm:text-[0.75rem] text-sky-50 shadow-xl backdrop-blur-lg">
      <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-sky-300/80">Langues</p>
      <ul className="text-[0.65rem] sm:text-[0.7rem] text-slate-200/95 space-y-0.5">
        <li>Français · natif</li>
        <li>Anglais · B1/B2</li>
        <li>Espagnol · B2</li>
      </ul>

      <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-sky-300/80">
        Soft skills
      </p>
      <div className="mt-1 flex flex-wrap gap-1.5">
        {['Travail en équipe', 'À l’écoute', 'Autonome', 'Sociable'].map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[0.55rem] sm:text-[0.6rem] font-medium text-sky-100 border border-slate-500/40"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function AboutDiversCard() {
  return (
    <div className="w-52 sm:w-60 max-w-full rounded-2xl border border-slate-500/50 bg-slate-950/95 px-3 sm:px-4 py-2 sm:py-2.5 text-[0.7rem] sm:text-[0.75rem] text-sky-50 shadow-xl backdrop-blur-lg">
      <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-sky-300/80">Divers</p>
      <ul className="text-[0.65rem] sm:text-[0.7rem] text-slate-200/95 space-y-0.5">
        <li>Permis AM & B</li>
        <li>PSC1</li>
        <li>Vice‑président BDE (2023 & 2024)</li>
      </ul>

      <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-sky-300/80">Contact</p>
      <div className="text-[0.7rem] text-slate-200/95 space-y-0.5">
        <p>06 48 63 02 30</p>
        <p>lilian.garcia77176@gmail.com</p>
      </div>
    </div>
  )
}

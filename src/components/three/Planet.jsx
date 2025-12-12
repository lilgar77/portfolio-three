import { Html } from '@react-three/drei'
import { useMemo, useState, useEffect } from 'react'
import { CompetencesLangagesCard, CompetencesFrameworksCard, CompetencesOutilsCard } from './CompetencesPanel'
import { AboutProfilCard, AboutFormationCard, AboutExperiencesCard, AboutLanguesSoftSkillsCard, AboutDiversCard } from './AboutPanel'
import cvPdf from '../../assets/CV-GARCIA-LILIAN.pdf'
import { makePlanetTexture } from './planetTextures'

export default function Planet({ position, label, type, onClick, canInteract, isSelected, onOpenContactForm, showContactForm }) {
  const [hovered, setHovered] = useState(false)
  const planetMap = useMemo(() => makePlanetTexture(type), [type])

  useEffect(() => {
    if (!canInteract && hovered) {
      setHovered(false)
    }
  }, [canInteract, hovered])

  return (
    <group position={position}>
      <mesh
        castShadow
        receiveShadow
        onClick={canInteract ? () => onClick?.({ label, position }) : undefined}
        onPointerOver={canInteract ? () => setHovered(true) : undefined}
        onPointerOut={canInteract ? () => setHovered(false) : undefined}
      >
        <sphereGeometry args={[1.8, 48, 48]} />
        <meshStandardMaterial
          map={planetMap ?? undefined}
          color={hovered && canInteract ? '#e5f3ff' : '#ffffff'}
          roughness={type === 'saturn' ? 0.6 : 0.4}
          metalness={type === 'earth' ? 0.5 : 0.3}
          emissive={hovered && canInteract ? '#38bdf8' : '#000000'}
          emissiveIntensity={hovered && canInteract ? 0.35 : 0}
        />
      </mesh>

      {type === 'saturn' && (
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.4, 0.08, 16, 64]} />
          <meshStandardMaterial
            color={hovered && canInteract ? '#fde68a' : '#facc6b'}
            roughness={0.7}
            metalness={0.15}
          />
        </mesh>
      )}

      <Html distanceFactor={6} position={[0, 2.5, 0]} center>
        <div
          className={
            `rounded-full border bg-black/60 px-7 py-1.5 whitespace-nowrap ${isSelected ? 'text-lg' : (label === 'À propos' ? 'text-3xl' : 'text-4xl')} font-bold uppercase tracking-[0.22em] backdrop-blur ` +
            (hovered && canInteract
              ? 'border-sky-400 text-sky-100 shadow-[0_0_20px_rgba(56,189,248,0.6)]'
              : 'border-white/20 text-gray-100')
          }
        >
          {label}
        </div>
      </Html>

      {label === 'Contact' && isSelected && !showContactForm && (
        <>
          <Html distanceFactor={4} position={[-1, 0.1, 1.2]} center>
            <a href="https://www.linkedin.com/in/lilian-garcia-024858264" target="_blank" rel="noreferrer">
              <div className="w-36 rounded-2xl border border-sky-400/60 bg-slate-900/95 px-3.5 py-2 text-[0.75rem] text-left text-sky-100 shadow-lg backdrop-blur-sm hover:border-sky-300 hover:text-sky-200">
                <p className="font-semibold tracking-[0.18em] uppercase">LinkedIn</p>
                <p className="mt-1 text-[0.6rem] text-sky-200/85">Voir mon profil pro</p>
              </div>
            </a>
          </Html>

          <Html distanceFactor={4} position={[1, 0.1, 1.2]} center>
            <a href="https://github.com/lilgar77" target="_blank" rel="noreferrer">
              <div className="w-36 rounded-2xl border border-slate-500/70 bg-slate-900/95 px-3.5 py-2 text-[0.75rem] text-left text-gray-100 shadow-lg backdrop-blur-sm hover:border-sky-300 hover:text-sky-200">
                <p className="font-semibold tracking-[0.18em] uppercase">GitHub</p>
                <p className="mt-1 text-[0.6rem] text-gray-300/85">Explorer mes projets</p>
              </div>
            </a>
          </Html>

          <Html distanceFactor={5} position={[0, 1.4, -0.2]} center>
            <button type="button" onClick={onOpenContactForm}>
              <div className="w-44 rounded-2xl border border-emerald-400/70 bg-slate-900/95 px-4 py-2.5 text-[0.8rem] text-left text-emerald-100 shadow-lg backdrop-blur-sm hover:border-emerald-300">
                <p className="font-semibold tracking-[0.18em] uppercase">Message</p>
                <p className="mt-1 text-[0.65rem] text-emerald-100/90">M&apos;envoyer un mail rapide</p>
              </div>
            </button>
          </Html>
        </>
      )}

      {label === 'À propos' && isSelected && (
        <>
          <Html distanceFactor={3.6} position={[0, 1.4, 0.9]} center>
            <AboutProfilCard />
          </Html>

          <Html distanceFactor={3.6} position={[-1.4, 0.35, 0.8]} center>
            <AboutFormationCard />
          </Html>

          <Html distanceFactor={3.6} position={[1.4, 0.2, 0.8]} center>
            <AboutExperiencesCard />
          </Html>

          <Html distanceFactor={3.6} position={[-0.9, -0.65, 0.8]} center>
            <AboutLanguesSoftSkillsCard />
          </Html>

          <Html distanceFactor={3.6} position={[0.9, -0.65, 0.8]} center>
            <AboutDiversCard />
          </Html>

          <Html distanceFactor={3.2} position={[0, 0.1, 0.9]} center>
            <a
              href={cvPdf}
              download="CV-GARCIA-LILIAN.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/70 bg-sky-500/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky-100 shadow-md backdrop-blur-sm hover:bg-sky-500/20 hover:border-sky-300"
            >
              <span>Télécharger mon CV</span>
            </a>
          </Html>
        </>
      )}

      {label === 'Compétences' && isSelected && (
        <>
          <Html distanceFactor={4} position={[-0.6, -0.5, 1]} center>
            <CompetencesLangagesCard />
          </Html>

          <Html distanceFactor={4} position={[1, 0.25, 1.0]} center>
            <CompetencesFrameworksCard />
          </Html>

          <Html distanceFactor={4} position={[0, 1.1, 1.1]} center>
            <CompetencesOutilsCard />
          </Html>
        </>
      )}
    </group>
  )
}

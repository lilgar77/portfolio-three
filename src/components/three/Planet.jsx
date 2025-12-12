import { Html } from '@react-three/drei'
import { useMemo, useState, useEffect } from 'react'
import { CompetencesLangagesCard, CompetencesFrameworksCard, CompetencesOutilsCard } from './CompetencesPanel'
import { AboutProfilCard, AboutFormationCard, AboutExperiencesCard, AboutLanguesSoftSkillsCard, AboutDiversCard } from './AboutPanel'
import cvPdf from '../../assets/CV-GARCIA-LILIAN.pdf'
import { makePlanetTexture } from './planetTextures'

export default function Planet({
  position,
  label,
  type,
  onClick,
  canInteract,
  isSelected,
  isSmallScreen,
  onOpenContactForm,
  showContactForm,
}) {
  const [hovered, setHovered] = useState(false)
  const planetMap = useMemo(() => makePlanetTexture(type), [type])

  const labelDistance = isSmallScreen ? 7 : 6
  const labelPosY = isSmallScreen ? 2.3 : 2.5
  const labelTextClass = isSelected
    ? 'text-lg'
    : (label === 'À propos' ? (isSmallScreen ? 'text-2xl' : 'text-3xl') : (isSmallScreen ? 'text-3xl' : 'text-4xl'))

  const contactDf = isSmallScreen ? 5 : 4
  const aboutDf = isSmallScreen ? 4.2 : 3.6
  const aboutCenterDf = isSmallScreen ? 3.7 : 3.2
  const competencesDf = isSmallScreen ? 4.6 : 4

  const contactPosLeft = isSmallScreen ? [-0.9, 0.1, 1.1] : [-1, 0.1, 1.2]
  const contactPosRight = isSmallScreen ? [0.9, 0.1, 1.1] : [1, 0.1, 1.2]
  const contactPosTop = isSmallScreen ? [0, 1.25, -0.2] : [0, 1.4, -0.2]

  const aboutPosTop = isSmallScreen ? [0, 1.15, 0.85] : [0, 1.4, 0.9]
  const aboutPosLeft = isSmallScreen ? [-1.15, 0.25, 0.75] : [-1.4, 0.35, 0.8]
  const aboutPosRight = isSmallScreen ? [1.15, 0.15, 0.75] : [1.4, 0.2, 0.8]
  const aboutPosBottomLeft = isSmallScreen ? [-0.75, -0.6, 0.75] : [-0.9, -0.65, 0.8]
  const aboutPosBottomRight = isSmallScreen ? [0.75, -0.6, 0.75] : [0.9, -0.65, 0.8]
  const aboutPosCenter = isSmallScreen ? [0, -0.1, 0.85] : [0, 0.1, 0.9]

  const compPosLeft = isSmallScreen ? [-0.55, -0.6, 0.95] : [-0.6, -0.5, 1]
  const compPosRight = isSmallScreen ? [0.95, 0.15, 0.95] : [1, 0.25, 1.0]
  const compPosTop = isSmallScreen ? [0, 0.95, 1.0] : [0, 1.1, 1.1]

  const showMobileStack = Boolean(isSmallScreen && isSelected)

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

      <Html distanceFactor={labelDistance} position={[0, labelPosY, 0]} center>
        <div
          className={
            `rounded-full border bg-black/60 px-7 py-1.5 whitespace-nowrap ${labelTextClass} font-bold uppercase tracking-[0.22em] backdrop-blur ` +
            (hovered && canInteract
              ? 'border-sky-400 text-sky-100 shadow-[0_0_20px_rgba(56,189,248,0.6)]'
              : 'border-white/20 text-gray-100')
          }
        >
          {label}
        </div>
      </Html>

      {showMobileStack && label === 'Contact' && !showContactForm && (
        <Html distanceFactor={7.2} position={[0, 0.2, 1.15]} center>
          <div className="pointer-events-auto w-[min(78vw,22rem)] max-h-[60vh] overflow-auto rounded-2xl border border-slate-600/60 bg-slate-950/90 p-3 text-sky-50 shadow-xl backdrop-blur-lg">
            <div className="space-y-2">
              <a href="https://www.linkedin.com/in/lilian-garcia-024858264" target="_blank" rel="noreferrer">
                <div className="rounded-2xl border border-sky-400/60 bg-slate-900/95 px-3 py-2 text-left hover:border-sky-300">
                  <p className="text-[0.75rem] font-semibold tracking-[0.18em] uppercase text-sky-100">LinkedIn</p>
                  <p className="mt-1 text-[0.65rem] text-sky-200/85">Voir mon profil pro</p>
                </div>
              </a>

              <a href="https://github.com/lilgar77" target="_blank" rel="noreferrer">
                <div className="rounded-2xl border border-slate-500/70 bg-slate-900/95 px-3 py-2 text-left hover:border-sky-300">
                  <p className="text-[0.75rem] font-semibold tracking-[0.18em] uppercase text-gray-100">GitHub</p>
                  <p className="mt-1 text-[0.65rem] text-gray-300/85">Explorer mes projets</p>
                </div>
              </a>

              <button type="button" onClick={onOpenContactForm} className="w-full">
                <div className="rounded-2xl border border-emerald-400/70 bg-slate-900/95 px-3 py-2 text-left hover:border-emerald-300">
                  <p className="text-[0.75rem] font-semibold tracking-[0.18em] uppercase text-emerald-100">Message</p>
                  <p className="mt-1 text-[0.65rem] text-emerald-100/90">M&apos;envoyer un mail rapide</p>
                </div>
              </button>
            </div>
          </div>
        </Html>
      )}

      {!showMobileStack && label === 'Contact' && isSelected && !showContactForm && (
        <>
          <Html distanceFactor={contactDf} position={contactPosLeft} center>
            <a href="https://www.linkedin.com/in/lilian-garcia-024858264" target="_blank" rel="noreferrer">
              <div className="w-32 sm:w-36 rounded-2xl border border-sky-400/60 bg-slate-900/95 px-3 py-2 text-[0.7rem] sm:text-[0.75rem] text-left text-sky-100 shadow-lg backdrop-blur-sm hover:border-sky-300 hover:text-sky-200">
                <p className="font-semibold tracking-[0.18em] uppercase">LinkedIn</p>
                <p className="mt-1 text-[0.55rem] sm:text-[0.6rem] text-sky-200/85">Voir mon profil pro</p>
              </div>
            </a>
          </Html>

          <Html distanceFactor={contactDf} position={contactPosRight} center>
            <a href="https://github.com/lilgar77" target="_blank" rel="noreferrer">
              <div className="w-32 sm:w-36 rounded-2xl border border-slate-500/70 bg-slate-900/95 px-3 py-2 text-[0.7rem] sm:text-[0.75rem] text-left text-gray-100 shadow-lg backdrop-blur-sm hover:border-sky-300 hover:text-sky-200">
                <p className="font-semibold tracking-[0.18em] uppercase">GitHub</p>
                <p className="mt-1 text-[0.55rem] sm:text-[0.6rem] text-gray-300/85">Explorer mes projets</p>
              </div>
            </a>
          </Html>

          <Html distanceFactor={isSmallScreen ? 5.6 : 5} position={contactPosTop} center>
            <button type="button" onClick={onOpenContactForm}>
              <div className="w-40 sm:w-44 rounded-2xl border border-emerald-400/70 bg-slate-900/95 px-3.5 sm:px-4 py-2.5 text-[0.75rem] sm:text-[0.8rem] text-left text-emerald-100 shadow-lg backdrop-blur-sm hover:border-emerald-300">
                <p className="font-semibold tracking-[0.18em] uppercase">Message</p>
                <p className="mt-1 text-[0.6rem] sm:text-[0.65rem] text-emerald-100/90">M&apos;envoyer un mail rapide</p>
              </div>
            </button>
          </Html>
        </>
      )}

      {showMobileStack && label === 'À propos' && (
        <Html distanceFactor={7.2} position={[0, 0.1, 1.15]} center>
          <div className="pointer-events-auto w-[min(82vw,24rem)] max-h-[65vh] overflow-auto rounded-2xl border border-slate-600/60 bg-slate-950/90 p-3 shadow-xl backdrop-blur-lg">
            <div className="space-y-2">
              <AboutProfilCard />
              <AboutFormationCard />
              <AboutExperiencesCard />
              <AboutLanguesSoftSkillsCard />
              <AboutDiversCard />

              <a
                href={cvPdf}
                download="CV-GARCIA-LILIAN.pdf"
                className="block w-full text-center rounded-full border border-sky-400/70 bg-sky-500/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky-100 shadow-md backdrop-blur-sm hover:bg-sky-500/20 hover:border-sky-300"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </Html>
      )}

      {!showMobileStack && label === 'À propos' && isSelected && (
        <>
          <Html distanceFactor={aboutDf} position={aboutPosTop} center>
            <AboutProfilCard />
          </Html>

          <Html distanceFactor={aboutDf} position={aboutPosLeft} center>
            <AboutFormationCard />
          </Html>

          <Html distanceFactor={aboutDf} position={aboutPosRight} center>
            <AboutExperiencesCard />
          </Html>

          <Html distanceFactor={aboutDf} position={aboutPosBottomLeft} center>
            <AboutLanguesSoftSkillsCard />
          </Html>

          <Html distanceFactor={aboutDf} position={aboutPosBottomRight} center>
            <AboutDiversCard />
          </Html>

          <Html distanceFactor={aboutCenterDf} position={aboutPosCenter} center>
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

      {showMobileStack && label === 'Compétences' && (
        <Html distanceFactor={7.2} position={[0, 0.1, 1.15]} center>
          <div className="pointer-events-auto w-[min(82vw,24rem)] max-h-[65vh] overflow-auto rounded-2xl border border-slate-600/60 bg-slate-950/90 p-3 shadow-xl backdrop-blur-lg">
            <div className="space-y-2">
              <CompetencesLangagesCard />
              <CompetencesFrameworksCard />
              <CompetencesOutilsCard />
            </div>
          </div>
        </Html>
      )}

      {!showMobileStack && label === 'Compétences' && isSelected && (
        <>
          <Html distanceFactor={competencesDf} position={compPosLeft} center>
            <CompetencesLangagesCard />
          </Html>

          <Html distanceFactor={competencesDf} position={compPosRight} center>
            <CompetencesFrameworksCard />
          </Html>

          <Html distanceFactor={competencesDf} position={compPosTop} center>
            <CompetencesOutilsCard />
          </Html>
        </>
      )}
    </group>
  )
}

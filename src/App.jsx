import { useState, useEffect } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import IntroScene from './components/three/IntroScene'
import { EnterButton } from './components/ui/EnterButton'

function App() {
  const [phase, setPhase] = useState('intro')
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [isSendingContact, setIsSendingContact] = useState(false)
  const [contactError, setContactError] = useState('')

  const handleEnter = () => {
    setSelectedPlanet(null)
    setPhase('loading')
  }

  const handlePlanetClick = (planet) => {
    if (phase !== 'space') return
    setSelectedPlanet(planet)
  }

  useEffect(() => {
    if (phase !== 'loading') return

    const timer = setTimeout(() => {
      setPhase('space')
    }, 2600)

    return () => clearTimeout(timer)
  }, [phase])

  useEffect(() => {
    if (!showContactForm) {
      setContactError('')
      setIsSendingContact(false)
    }
  }, [showContactForm])

  const submitContact = async () => {
    setContactError('')
    setIsSendingContact(true)

    try {
      const res = await fetch('https://n8n.lilgar.fr/webhook/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
        }),
      })

      if (!res.ok) {
        throw new Error(`Webhook error: ${res.status}`)
      }

      setShowContactForm(false)
      setContactName('')
      setContactEmail('')
      setContactMessage('')
    } catch (err) {
      setContactError("Impossible d'envoyer le message. Réessaie dans un instant.")
    } finally {
      setIsSendingContact(false)
    }
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Canvas ThreeJS plein écran */}
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <color attach="background" args={["#02030a"]} />
        <IntroScene
          phase={phase}
          selectedPlanet={selectedPlanet}
          onPlanetClick={handlePlanetClick}
          onOpenContactForm={() => setShowContactForm(true)}
          showContactForm={showContactForm}
        />
      </Canvas>

      {/* Overlay texte Tailwind / UI */}
      <div
        className={
          `pointer-events-none absolute inset-0 flex flex-col items-center text-center text-gray-100 transition-all duration-700 ` +
          (phase === 'intro'
            ? 'justify-center bg-gradient-to-b from-black via-black to-slate-950'
            : phase === 'loading'
              ? 'justify-center bg-black'
              : 'justify-end pb-10 sm:pb-12')
        }
      >
        <div className="pointer-events-auto max-w-xl px-4">
          {phase === 'intro' ? (
            <>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-400">
                initialisation
              </p>
              <h1 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
                Bienvenue sur le portfolio de <span className="text-sky-400">Lilian</span>
              </h1>
              <p className="mx-auto max-w-md text-sm text-gray-400 sm:text-base">
                Appuie sur Entrer pour lancer la séquence et rejoindre les planètes de mon univers.
              </p>
              <div className="mt-6 flex justify-center">
                <EnterButton onClick={handleEnter} />
              </div>
            </>
          ) : phase === 'loading' ? (
            <>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-500">
                préparation de l&apos;orbite
              </p>
              <div className="mx-auto mb-3 h-1.5 w-48 overflow-hidden rounded-full bg-slate-700/60">
                <div className="h-full w-full origin-left animate-[loading-bar_2.4s_ease-out_forwards] bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500" />
              </div>
              <p className="mx-auto max-w-md text-xs text-gray-500 sm:text-sm">
                Chargement de la navigation interstellaire...
              </p>
            </>
          ) : (
            <>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-400">
                signal rétabli
              </p>

              {/* Vue orbite : titre + texte d&apos;instruction */}
              {!selectedPlanet && (
                <>
                  <h1 className="mb-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
                    Bienvenue sur le portfolio de <span className="text-sky-400">Lilian</span>
                  </h1>
                  <p className="mx-auto max-w-md text-sm text-gray-400 sm:text-base">
                    Tu es maintenant en orbite : clique sur une planète pour explorer mes compétences, projets, à propos ou contact.
                  </p>
                </>
              )}

              {/* En zoom sur une planète : uniquement un bouton Retour global */}
              {selectedPlanet && (
                <div className="mt-3 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setSelectedPlanet(null)}
                    className="rounded-full border border-gray-500/50 bg-black/40 px-5 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-gray-200 backdrop-blur transition hover:bg-gray-700/50"
                  >
                    Retour aux planètes
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Formulaire de contact en overlay simple */}
      {showContactForm && (
        <div className="pointer-events-auto absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/90 p-5 text-sm text-gray-100 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-semibold uppercase tracking-[0.22em] text-gray-300">
                Message pour Lilian
              </h2>
              <button
                type="button"
                onClick={() => setShowContactForm(false)}
                className="rounded-full border border-gray-600/60 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-gray-300 hover:border-sky-400 hover:text-sky-100"
              >
                Fermer
              </button>
            </div>

            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault()
                if (isSendingContact) return
                submitContact()
              }}
            >
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="mb-1 block text-[0.7rem] uppercase tracking-[0.18em] text-gray-400">
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full rounded-md border border-slate-700 bg-black/40 px-2.5 py-1.5 text-xs text-gray-100 outline-none ring-0 focus:border-sky-400"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-[0.7rem] uppercase tracking-[0.18em] text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full rounded-md border border-slate-700 bg-black/40 px-2.5 py-1.5 text-xs text-gray-100 outline-none ring-0 focus:border-sky-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-[0.7rem] uppercase tracking-[0.18em] text-gray-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full resize-none rounded-md border border-slate-700 bg-black/40 px-2.5 py-1.5 text-xs text-gray-100 outline-none ring-0 focus:border-sky-400"
                />
              </div>

              {contactError && (
                <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-200">
                  {contactError}
                </div>
              )}

              <div className="mt-1 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="rounded-full border border-gray-600/60 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gray-300 hover:border-gray-400"
                  disabled={isSendingContact}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-sky-500 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sky-950 shadow-sm hover:bg-sky-400 disabled:opacity-60"
                  disabled={isSendingContact}
                >
                  {isSendingContact ? 'Envoi...' : 'Envoyer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

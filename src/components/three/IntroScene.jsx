import { useRef } from 'react'
import { Stars } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import PlanetField from './PlanetField'

export default function IntroScene({ phase, selectedPlanet, onPlanetClick, onOpenContactForm, showContactForm }) {
  const groupRef = useRef()
  const { mouse, camera } = useThree()

  useFrame(() => {
    const mouseX = mouse.x
    const mouseY = mouse.y

    // Position de base en intro : caméra très haute/loin, léger parallax
    let baseCamX = mouseX * 3
    let baseCamY = 4 + mouseY * 1.5
    let baseCamZ = 30
    let baseRotX = -mouseY * 0.12
    let baseRotY = mouseX * 0.2

    if (phase === 'space') {
      // Une seule grosse animation : on descend doucement et on s'approche des planètes
      baseCamX = mouseX * 1.5
      baseCamY = -5 + mouseY * 1.0
      baseCamZ = 11
      baseRotX = -mouseY * 0.08
      baseRotY = mouseX * 0.15

      // Si une planète est sélectionnée, on se cale principalement sur elle et on coupe l'effet parallax
      if (selectedPlanet?.position) {
        const [px, py, pz] = selectedPlanet.position
        baseCamX = px
        baseCamY = py + 1.5
        baseCamZ = pz + 4
        baseRotX = 0
        baseRotY = 0
      }
    }

    const targetCamX = baseCamX
    const targetCamY = baseCamY
    const targetCamZ = baseCamZ
    const targetGroupRotX = baseRotX
    const targetGroupRotY = baseRotY

    camera.position.x += (targetCamX - camera.position.x) * 0.02
    camera.position.y += (targetCamY - camera.position.y) * 0.02
    camera.position.z += (targetCamZ - camera.position.z) * 0.015

    if (phase === 'space' && selectedPlanet?.position) {
      const [px, py, pz] = selectedPlanet.position
      camera.lookAt(px, py, pz)
    } else {
      camera.lookAt(0, -5, -15)
    }

    if (groupRef.current) {
      groupRef.current.rotation.y += (targetGroupRotY - groupRef.current.rotation.y) * 0.08
      groupRef.current.rotation.x += (targetGroupRotX - groupRef.current.rotation.x) * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 3]} intensity={0.7} />

      <Stars
        radius={80}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      <fog attach="fog" args={["#02030a", 10, 80]} />

      {phase === 'space' && (
        <PlanetField
          onPlanetClick={onPlanetClick}
          canInteract={!selectedPlanet}
          selectedPlanet={selectedPlanet}
          onOpenContactForm={onOpenContactForm}
          showContactForm={showContactForm}
        />
      )}
    </group>
  )
}

import Planet from './Planet'
import { getPlanetsLayout } from './planetsConfig'
import { useMemo } from 'react'
import { useThree } from '@react-three/fiber'

export default function PlanetField({ onPlanetClick, canInteract, selectedPlanet, onOpenContactForm, showContactForm }) {
  const { size } = useThree()
  const isSmallScreen = size.width < 640
  const planets = useMemo(() => getPlanetsLayout(isSmallScreen), [isSmallScreen])

  return (
    <group>
      {planets.map((planet) => (
        <Planet
          key={planet.label}
          {...planet}
          onClick={onPlanetClick}
          canInteract={canInteract}
          isSelected={selectedPlanet?.label === planet.label}
          isSmallScreen={isSmallScreen}
          onOpenContactForm={planet.label === 'Contact' ? onOpenContactForm : undefined}
          showContactForm={showContactForm}
        />
      ))}
    </group>
  )
}

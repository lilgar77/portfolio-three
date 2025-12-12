import Planet from './Planet'
import { PLANETS } from './planetsConfig'

export default function PlanetField({ onPlanetClick, canInteract, selectedPlanet, onOpenContactForm, showContactForm }) {
  return (
    <group>
      {PLANETS.map((planet) => (
        <Planet
          key={planet.label}
          {...planet}
          onClick={onPlanetClick}
          canInteract={canInteract}
          isSelected={selectedPlanet?.label === planet.label}
          onOpenContactForm={planet.label === 'Contact' ? onOpenContactForm : undefined}
          showContactForm={showContactForm}
        />
      ))}
    </group>
  )
}

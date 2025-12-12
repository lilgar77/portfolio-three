export function getPlanetsLayout(isSmallScreen) {
  if (isSmallScreen) {
    return [
      { position: [-5.6, -3.4, -14.7], label: 'Compétences', type: 'earth' },
      { position: [-0.8, -6.8, -16.0], label: 'Projets', type: 'mars' },
      { position: [3.4, -3.9, -13.6], label: 'À propos', type: 'neptune' },
      { position: [6.6, -6.8, -15.2], label: 'Contact', type: 'saturn' },
    ]
  }

  return [
    { position: [-8.2, -2.6, -14.6], label: 'Compétences', type: 'earth' },
    { position: [-1.4, -6.2, -16.2], label: 'Projets', type: 'mars' },
    { position: [4.6, -3.1, -13.2], label: 'À propos', type: 'neptune' },
    { position: [9.2, -6.0, -15.4], label: 'Contact', type: 'saturn' },
  ]
}

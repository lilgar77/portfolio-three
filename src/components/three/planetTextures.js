import * as THREE from 'three'

export function makePlanetTexture(type) {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const w = canvas.width
  const h = canvas.height

  const drawNoise = (alpha = 0.06, scale = 1) => {
    const img = ctx.getImageData(0, 0, w, h)
    const d = img.data
    for (let y = 0; y < h; y += 1) {
      for (let x = 0; x < w; x += 1) {
        const i = (y * w + x) * 4
        const n = (Math.random() - 0.5) * 255
        d[i] = Math.min(255, Math.max(0, d[i] + n * scale))
        d[i + 1] = Math.min(255, Math.max(0, d[i + 1] + n * scale))
        d[i + 2] = Math.min(255, Math.max(0, d[i + 2] + n * scale))
        d[i + 3] = Math.min(255, Math.max(0, d[i + 3] + 255 * alpha))
      }
    }
    ctx.putImageData(img, 0, 0)
  }

  if (type === 'earth') {
    const g = ctx.createLinearGradient(0, 0, 0, h)
    g.addColorStop(0, '#0b1f3a')
    g.addColorStop(0.45, '#0b4aa3')
    g.addColorStop(1, '#06326b')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)

    for (let i = 0; i < 260; i += 1) {
      const x = Math.random() * w
      const y = Math.random() * h
      const r = 6 + Math.random() * 30
      ctx.fillStyle = `rgba(34,197,94,${0.06 + Math.random() * 0.12})`
      ctx.beginPath()
      ctx.ellipse(x, y, r * 1.2, r, 0, 0, Math.PI * 2)
      ctx.fill()
    }

    for (let i = 0; i < 220; i += 1) {
      const x = Math.random() * w
      const y = Math.random() * h
      const r = 10 + Math.random() * 50
      ctx.fillStyle = `rgba(255,255,255,${0.02 + Math.random() * 0.06})`
      ctx.beginPath()
      ctx.ellipse(x, y, r * 1.8, r * 0.7, Math.random() * Math.PI, 0, Math.PI * 2)
      ctx.fill()
    }

    drawNoise(0.02, 0.35)
  } else if (type === 'mars') {
    const g = ctx.createLinearGradient(0, 0, 0, h)
    g.addColorStop(0, '#5a1d07')
    g.addColorStop(0.5, '#b45309')
    g.addColorStop(1, '#7c2d12')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)

    for (let i = 0; i < 320; i += 1) {
      const x = Math.random() * w
      const y = Math.random() * h
      const r = 3 + Math.random() * 18
      ctx.fillStyle = `rgba(30,41,59,${0.02 + Math.random() * 0.06})`
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }
    drawNoise(0.03, 0.55)
  } else if (type === 'neptune') {
    ctx.fillStyle = '#052e5a'
    ctx.fillRect(0, 0, w, h)

    for (let i = 0; i < 16; i += 1) {
      const y = (i / 16) * h
      const bandH = 12 + Math.random() * 22
      const opacity = 0.05 + Math.random() * 0.08
      ctx.fillStyle = `rgba(56,189,248,${opacity})`
      ctx.fillRect(0, y, w, bandH)
    }

    for (let i = 0; i < 120; i += 1) {
      const x = Math.random() * w
      const y = Math.random() * h
      const rw = 40 + Math.random() * 120
      const rh = 8 + Math.random() * 26
      ctx.fillStyle = `rgba(125,211,252,${0.02 + Math.random() * 0.05})`
      ctx.beginPath()
      ctx.ellipse(x, y, rw, rh, 0, 0, Math.PI * 2)
      ctx.fill()
    }

    drawNoise(0.02, 0.45)
  } else {
    const g = ctx.createLinearGradient(0, 0, 0, h)
    g.addColorStop(0, '#7a5a17')
    g.addColorStop(0.5, '#facc6b')
    g.addColorStop(1, '#8a6b1f')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)

    for (let i = 0; i < 20; i += 1) {
      const y = (i / 20) * h
      const bandH = 8 + Math.random() * 18
      const opacity = 0.05 + Math.random() * 0.08
      ctx.fillStyle = `rgba(255,255,255,${opacity})`
      ctx.fillRect(0, y, w, bandH)
    }

    drawNoise(0.02, 0.35)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping
  texture.repeat.set(1, 1)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 8
  texture.needsUpdate = true
  return texture
}

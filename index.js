const canvas = document.getElementById('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const { width, height } = canvas

const colorToI = [
  'red',
  'orange',
  'yellow',
  'green',
]
const _ = canvas.getContext('2d')
const phi = (1 + Math.sqrt(5)) / 2

let x0 = width / 2
let y0 = height / 2
let s = 33
let a = 0
let b = a -Math.PI / 2
let alt = 1

_.strokeStyle = 'Cyan'
_.fillStyle = 'DeepSkyBlue'
_.font = '16px arial'

for (let i = 0; i < 4; i++) {
  const ii = i % 2 === 0

  _.beginPath()
  _.arc(x0, y0, 4, 0, 2 * Math.PI)
  _.closePath()
  _.fillText(i, x0 + 6, y0 - 6)
  _.fill()
  _.beginPath()
  _.arc(x0, y0, s * phi, a, b, true)
  _.stroke()

  a = b
  b -= Math.PI / 2
  x0 -= ii ? 0 : alt * s
  y0 += ii ? alt * s : 0
  s = s * phi

  // Inspiration is a beauty
  if (ii) alt = -alt
}

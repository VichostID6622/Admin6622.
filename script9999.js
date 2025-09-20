const syncPointer = ({ x: pointerX, y: pointerY }) => {
  const x = pointerX.toFixed(2)
  const y = pointerY.toFixed(2)
  const xp = (pointerX / window.innerWidth).toFixed(2)
  const yp = (pointerY / window.innerHeight).toFixed(2)
  document.documentElement.style.setProperty('--x', x)
  document.documentElement.style.setProperty('--xp', xp)
  document.documentElement.style.setProperty('--y', y)
  document.documentElement.style.setProperty('--yp', yp)
}
document.body.addEventListener('pointermove', syncPointer)

var typed = new Typed(".highlight", {
          strings: ["BCA Student", "Editor", "Programmer"],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 200,
          loop: true
        })
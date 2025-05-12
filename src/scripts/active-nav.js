export function initActiveNav() {
  const $navLinks = [...document.querySelectorAll('header nav a')]
  const sections = []

  $navLinks.forEach(link => {
    const href = link.getAttribute('href')
    if (!href || !href.includes('#')) return

    const id = href.replace(/.*#/, '')
    const element = document.getElementById(id)

    if (element) {
      sections.push({
        id,
        element,
        links: $navLinks.filter(a => a.getAttribute('href')?.includes(`#${id}`))
      })
    }
  })

  let ticking = false

  function highlightActiveSection() {
    const scrollY = window.scrollY

    let currentSection = null

    for (const section of sections) {
      const offset = window.innerWidth >= 1024 ? 127 : 95

      if (scrollY >= section.element.offsetTop - offset) {
        currentSection = section
      } else {
        break
      }
    }

    $navLinks.forEach(link => link.classList.remove('text-blue-500'))

    if (currentSection) {
      currentSection.links.forEach(link => link.classList.add('text-blue-500'))
    }

    ticking = false
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(highlightActiveSection)
      ticking = true
    }
  })

  highlightActiveSection()

  window.addEventListener('resize', highlightActiveSection)
}

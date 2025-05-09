export function initActiveNav() {
  const $navAElements = [...document.querySelectorAll('header nav a')]

  window.addEventListener('scroll', () => {
    $navAElements.forEach(a => {
      const selectionForSection = a.getAttribute('href')
      if (selectionForSection) {
        const sectionId = selectionForSection.substring(1)
        const sectionElement = document.querySelector(`${sectionId}`)
        if (!sectionElement) return
        const selectionTop = sectionElement.offsetTop - (window.innerWidth >= 1024 ? 129 : 97)
        if (window.scrollY <= selectionTop) return
        $navAElements.forEach(aToRemove => aToRemove.classList.remove('text-blue-500'))
        a.classList.add('text-blue-500')
      }
    })
  })
}

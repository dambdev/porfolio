export function initMobileMenuClose() {
  document.querySelectorAll('#mobile-menu a, #mobile-menu button').forEach(link => {
    link.addEventListener('click', () => {
      const menuToggle = document.getElementById('menu-toggle')
      if (menuToggle) menuToggle.checked = false
    })
  })
}

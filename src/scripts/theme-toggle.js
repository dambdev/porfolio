export function initTheme() {
  const stored = localStorage.theme
  if (stored !== 'light') {
    document.documentElement.classList.add('dark')
  }
}

export function themeToggle() {
  const root = document.documentElement
  const isDark = root.classList.toggle('dark')
  localStorage.theme = isDark ? 'dark' : 'light'
}

export function initThemeToggle() {
  document.getElementById('theme-toggle')?.addEventListener('click', themeToggle)
  document.getElementById('mobile-theme-toggle')?.addEventListener('click', themeToggle)
}

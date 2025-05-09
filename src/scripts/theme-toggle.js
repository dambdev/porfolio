export function initTheme() {
  const stored = localStorage.theme
  if (stored !== 'light') {
    document.documentElement.classList.add('dark')
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#000033')
    document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', 'dark')
  }
}

export function themeToggle() {
  const root = document.documentElement
  const isDark = root.classList.toggle('dark')
  localStorage.theme = isDark ? 'dark' : 'light'
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', isDark ? '#000033' : '#ffe')
  document
    .querySelector('meta[name="color-scheme"]')
    ?.setAttribute('content', isDark ? 'dark' : 'light')
}

export function initThemeToggle() {
  document.getElementById('theme-toggle')?.addEventListener('click', themeToggle)
  document.getElementById('mobile-theme-toggle')?.addEventListener('click', themeToggle)
}

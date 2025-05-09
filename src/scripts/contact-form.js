import { toast } from 'sonner'

export function initContactForm() {
  const formUrl = import.meta.env.PUBLIC_FORM_URL
  const form = document.getElementById('contactForm')

  if (!form) return

  form.addEventListener('submit', async event => {
    event.preventDefault()
    const formData = new FormData(event.target)

    const submitButton = form.querySelector('button[type="submit"]')
    if (submitButton) submitButton.disabled = true

    toast.promise(
      fetch(formUrl, {
        method: 'POST',
        body: formData,
        mode: 'cors',
        headers: {
          Accept: 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Status: ${response.status}`)
          }
          form.reset()
          return response
        })
        .finally(() => {
          if (submitButton) submitButton.disabled = false
        }),
      {
        loading: 'Procesando formulario...',
        success: 'Formulario enviado con éxito!',
        error: error => `Error al enviar el formulario: ${error.message}`
      }
    )
  })
}

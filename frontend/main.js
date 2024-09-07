import './styles.css'
import { Router } from './src/utils/Router'

Router()
;(async () => {
  const response = await fetch('http://localhost:4000/session', {
    method: 'GET',
    credentials: 'include', // Importante para enviar las cookies de sesión
  })

  console.log({ response })

  if (response.ok) {
    const data = await response.json()
    document.getElementById(
      'user-name'
    ).innerText = `Hola, ${data.user.username}!`
  } else {
    if (
      window.location.pathname !== '/login' &&
      window.location.pathname !== '/register'
    ) {
      window.location.href = '/login'
    }
  }
})()

// Manejar el cierre de sesión

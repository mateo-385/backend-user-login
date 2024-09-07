export function Login() {
  const $buttonRegister = document.getElementById('button-register')
  const $buttonLogin = document.getElementById('button-login')

  $buttonRegister.addEventListener('click', (event) => {
    event.preventDefault()
    window.location.href = '/register'
  })

  $buttonLogin.addEventListener('click', async function (event) {
    event.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const divError = document.getElementById('message')

    if (!username || !password) {
      document.getElementById('message').innerText =
        'Por favor, rellena todos los campos'
      document
        .getElementById('label-username')
        .classList.add('ring-2', 'ring-error')
      document
        .getElementById('label-password')
        .classList.add('ring-2', 'ring-error')
      return
    }

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        credentials: 'include', // Importante para enviar las cookies de sesión
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        divError.innerText = 'Credenciales inválidas'
        divError.classList.add(
          'bg-error',
          'text-white',
          'text-center',
          'rounded',
          'p-2',
          'mt-3'
        )

        setTimeout(() => {
          divError.hidden = true
        }, 3500)

        return
      }

      const data = await response.json()
      console.log(data)
      window.location.href = '/home'
    } catch (error) {
      console.error(error)
    }
  })
}

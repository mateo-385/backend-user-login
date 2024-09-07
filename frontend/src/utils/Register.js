export function Register() {
  const $buttonRegister = document.getElementById('button-create')
  const $buttonLogin = document.getElementById('button-signin')

  $buttonLogin.addEventListener('click', (event) => {
    event.preventDefault()
    window.location.href = '/login'
  })

  $buttonRegister.addEventListener('click', async function (event) {
    event.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const divError = document.getElementById('message')

    if (!username || !password) {
      document.getElementById('message').innerText = 'Please fill in all fields'
      document
        .getElementById('label-username')
        .classList.add('ring-2', 'ring-error')
      document
        .getElementById('label-password')
        .classList.add('ring-2', 'ring-error')
      return
    }

    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        divError.innerText = 'El usuario ya existe'
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
      window.location.href = '/login'
    } catch (error) {
      console.error(error)
    }
  })
}

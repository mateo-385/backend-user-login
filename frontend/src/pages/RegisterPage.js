export function RegisterPage() {
  document.title = 'Create Account'

  // Create elements
  const $container = document.createElement('div')
  const $text = document.createElement('div')
  const $title = document.createElement('h1')
  const $p = document.createElement('p')
  const $form = document.createElement('div')
  const $error = document.createElement('div')
  const $labelUsername = document.createElement('label')
  const $inputUsername = document.createElement('input')
  const $labelPassword = document.createElement('label')
  const $inputPassword = document.createElement('input')
  const $passwordLink = document.createElement('a')
  const $buttons = document.createElement('div')
  const $buttonLogin = document.createElement('button')
  const $buttonRegister = document.createElement('button')
  const $divider = document.createElement('div')

  //Attributes
  $container.setAttribute('id', 'container')
  $text.setAttribute('id', 'text')
  $title.setAttribute('id', 'title')
  $p.setAttribute('id', 'p')
  $form.setAttribute('id', 'form')
  $error.setAttribute('id', 'message')
  $labelUsername.setAttribute('id', 'label-username')
  $inputUsername.setAttribute('id', 'username')
  $inputUsername.setAttribute('type', 'text')
  $inputUsername.setAttribute('placeholder', 'Nombre de Usuario')
  $labelPassword.setAttribute('id', 'label-password')
  $inputPassword.setAttribute('id', 'password')
  $inputPassword.setAttribute('type', 'password')
  $inputPassword.setAttribute('placeholder', 'Contraseña')
  $passwordLink.setAttribute('id', 'password-link')
  $buttons.setAttribute('id', 'buttons')
  $buttonLogin.setAttribute('id', 'button-signin')
  $buttonRegister.setAttribute('id', 'button-create')
  $divider.setAttribute('id', 'divider')

  //Classes
  $container.classList.add(
    'w-96',
    'mx-auto',
    'bg-base-200',
    'p-6',
    'rounded-lg',
    'mt-20'
  )
  $text.classList.add('mb-4')
  $title.classList.add('text-3xl', 'font-semibold', 'mb-1')
  $form.classList.add('login-form', 'flex', 'flex-col', 'mb-4')
  $error.classList.add('text-error', 'mb-4')
  $labelUsername.classList.add(
    'input',
    'input-bordered',
    'flex',
    'items-center',
    'gap-2',
    'mb-4'
  )
  $inputUsername.classList.add('grow')
  $labelPassword.classList.add(
    'input',
    'input-bordered',
    'flex',
    'items-center',
    'gap-2',
    'mb-1'
  )
  $inputPassword.classList.add('grow')
  $passwordLink.classList.add(
    'link',
    'link-primary',
    'no-underline',
    'font-semibold'
  )
  $buttons.classList.add('flex', 'flex-col')
  $buttonRegister.classList.add(
    'btn',
    'btn-outline',
    'btn-primary',
    'rounded-full',
    'text-base'
  )
  $divider.classList.add('divider', 'px-5', 'my-3', 'text-xs')
  $buttonLogin.classList.add(
    'btn',
    'btn-secondary',
    'rounded-full',
    'text-base'
  )

  //Content
  $title.textContent = 'Crear Cuenta'
  $p.textContent = 'Por favor, rellena los siguientes campos:'
  $buttonRegister.textContent = 'Crear Cuenta'
  $buttonLogin.textContent = 'Iniciar Sesión'
  $divider.textContent = 'O'

  // Append elements
  $text.appendChild($title)
  $text.appendChild($p)
  $labelUsername.appendChild($inputUsername)
  $labelPassword.appendChild($inputPassword)
  $form.appendChild($error)
  $form.appendChild($labelUsername)
  $form.appendChild($labelPassword)
  $form.appendChild($passwordLink)
  $buttons.appendChild($buttonRegister)
  $buttons.appendChild($divider)
  $buttons.appendChild($buttonLogin)
  $container.appendChild($text)
  $container.appendChild($form)
  $container.appendChild($buttons)

  return $container
}

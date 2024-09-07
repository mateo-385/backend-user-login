export function Footer() {
  // Create elements
  const $footer = document.createElement('footer')
  const $aside = document.createElement('aside')
  const $paragraph = document.createElement('p')

  // Attributes
  $footer.classList.add(
    'footer',
    'footer-center',
    'bg-base-300',
    'text-base-content',
    'p-4'
  )

  // Content
  $paragraph.textContent = `Copyright © ${new Date().getFullYear()} - LockDev. Todos los derechos reservados.`

  // Append elements
  $aside.appendChild($paragraph)
  $footer.appendChild($aside)

  return $footer
}

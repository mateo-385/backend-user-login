export function Navbar() {
  // Create elements
  const $navbar = document.createElement('div')
  const $navbarStart = document.createElement('div')
  const $dropdown = document.createElement('div')
  const $dropdownButton = document.createElement('div')
  const $dropdownIcon = document.createElement('svg')
  const $dropdownPath = document.createElement('path')
  const $dropdownMenu = document.createElement('ul')
  const $dropdownItemHome = document.createElement('li')
  const $dropdownLinkHome = document.createElement('a')
  const $dropdownItemBlog = document.createElement('li')
  const $dropdownLinkBlog = document.createElement('a')
  const $dropdownItemAbout = document.createElement('li')
  const $dropdownLinkAbout = document.createElement('a')
  const $brandLink = document.createElement('a')
  const $navbarCenter = document.createElement('div')
  const $menu = document.createElement('ul')
  const $menuItemHome = document.createElement('li')
  const $menuLinkHome = document.createElement('a')
  const $menuItemBlog = document.createElement('li')
  const $menuLinkBlog = document.createElement('a')
  const $menuItemAbout = document.createElement('li')
  const $menuLinkAbout = document.createElement('a')
  const $navbarEnd = document.createElement('div')
  const $userName = document.createElement('h1')
  const $logoutButton = document.createElement('a')

  // Attributes
  $navbar.classList.add('navbar', 'bg-base-100')
  $navbarStart.classList.add('navbar-start')
  $dropdown.classList.add('dropdown')
  $dropdownButton.setAttribute('tabindex', '0')
  $dropdownButton.setAttribute('role', 'button')
  $dropdownButton.classList.add('btn', 'btn-ghost', 'lg:hidden')

  $dropdownIcon.classList.add('h-5', 'w-5')
  $dropdownIcon.setAttribute('fill', 'none')
  $dropdownIcon.setAttribute('viewBox', '0 0 24 24')
  $dropdownIcon.setAttribute('stroke', 'currentColor')
  $dropdownPath.setAttribute('stroke-linecap', 'round')
  $dropdownPath.setAttribute('stroke-linejoin', 'round')
  $dropdownPath.setAttribute('stroke-width', '2')
  $dropdownPath.setAttribute('d', 'M4 6h16M4 12h8m-8 6h16')
  $dropdownMenu.setAttribute('tabindex', '0')
  $dropdownMenu.classList.add(
    'menu',
    'menu-sm',
    'dropdown-content',
    'bg-base-100',
    'rounded-box',
    'z-[1]',
    'mt-3',
    'w-52',
    'p-2',
    'shadow'
  )
  $dropdownLinkHome.setAttribute('href', '/home')
  $dropdownLinkBlog.setAttribute('href', '/blog')
  $dropdownLinkAbout.setAttribute('href', '/about')
  $brandLink.classList.add('btn', 'btn-ghost', 'text-xl', 'pl-0', 'sm:pl-4')
  $navbarCenter.classList.add('navbar-center', 'hidden', 'lg:flex')
  $menu.classList.add('menu', 'menu-horizontal', 'px-1')
  $menuLinkHome.setAttribute('href', '/home')
  $menuLinkBlog.setAttribute('href', '/blog')
  $menuLinkAbout.setAttribute('href', '/about')
  $navbarEnd.classList.add('navbar-end', 'gap-2', 'md:gap-5')
  $userName.setAttribute('id', 'user-name')
  $logoutButton.setAttribute('id', 'logout')
  $logoutButton.classList.add('btn', 'btn-outline', 'px-2')

  // Content
  $dropdownIcon.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-5 w-5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4 6h16M4 12h8m-8 6h16" />
</svg>`

  $dropdownLinkHome.textContent = 'Home'
  $dropdownLinkBlog.textContent = 'Blog'
  $dropdownLinkAbout.textContent = 'About'
  $brandLink.textContent = 'LockDev'
  $menuLinkHome.textContent = 'Home'
  $menuLinkBlog.textContent = 'Blog'
  $menuLinkAbout.textContent = 'About'
  $logoutButton.textContent = 'Logout'

  // Append elements
  $dropdownIcon.appendChild($dropdownPath)
  $dropdownButton.appendChild($dropdownIcon)
  $dropdownItemHome.appendChild($dropdownLinkHome)
  $dropdownItemBlog.appendChild($dropdownLinkBlog)
  $dropdownItemAbout.appendChild($dropdownLinkAbout)
  $dropdownMenu.appendChild($dropdownItemHome)
  $dropdownMenu.appendChild($dropdownItemBlog)
  $dropdownMenu.appendChild($dropdownItemAbout)
  $dropdown.appendChild($dropdownButton)
  $dropdown.appendChild($dropdownMenu)
  $navbarStart.appendChild($dropdown)
  $navbarStart.appendChild($brandLink)
  $menuItemHome.appendChild($menuLinkHome)
  $menuItemBlog.appendChild($menuLinkBlog)
  $menuItemAbout.appendChild($menuLinkAbout)
  $menu.appendChild($menuItemHome)
  $menu.appendChild($menuItemBlog)
  $menu.appendChild($menuItemAbout)
  $navbarCenter.appendChild($menu)
  $navbarEnd.appendChild($userName)
  $navbarEnd.appendChild($logoutButton)
  $navbar.appendChild($navbarStart)
  $navbar.appendChild($navbarCenter)
  $navbar.appendChild($navbarEnd)

  // Event listeners
  $logoutButton.addEventListener('click', async () => {
    const response = await fetch('http://localhost:4000/logout', {
      method: 'POST',
      credentials: 'include',
    })

    if (!response.ok) {
      throw new Error('Error al cerrar sesión')
    } else {
      window.location.href = '/login'
    }
  })

  return $navbar
}

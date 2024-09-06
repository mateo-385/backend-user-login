export function HomePage() {
  // Create elements
  const $main = document.createElement('main')
  const $container1 = document.createElement('div')
  const $h1 = document.createElement('h1')
  const $p1 = document.createElement('p')
  const $divider1 = document.createElement('div')
  const $container2 = document.createElement('div')
  const $section1 = document.createElement('div')
  const $img1Wrapper = document.createElement('div')
  const $img1 = document.createElement('img')
  const $section1Text = document.createElement('div')
  const $h2_1 = document.createElement('h2')
  const $p2 = document.createElement('p')
  const $divider2 = document.createElement('div')
  const $section2 = document.createElement('div')
  const $img2Wrapper = document.createElement('div')
  const $img2 = document.createElement('img')
  const $section2Text = document.createElement('div')
  const $h2_2 = document.createElement('h2')
  const $p3 = document.createElement('p')
  const $divider3 = document.createElement('div')
  const $section3 = document.createElement('div')
  const $img3Wrapper = document.createElement('div')
  const $img3 = document.createElement('img')
  const $section3Text = document.createElement('div')
  const $h2_3 = document.createElement('h2')
  const $p4 = document.createElement('p')

  // Set attributes and classes
  $main.classList.add('flex-grow', 'mb-10')
  $container1.classList.add('container', 'mx-auto', 'px-4')
  $h1.classList.add('text-center', 'my-4', 'text-3xl', 'font-bold')
  $p1.classList.add('text-center', 'text-lg')
  $divider1.classList.add('divider')
  $container2.classList.add('container', 'mx-auto', 'px-4')
  $section1.classList.add(
    'flex',
    'flex-col',
    'md:flex-row',
    'items-center',
    'py-4',
    'gap-10'
  )
  $img1Wrapper.classList.add('md:w-1/2')
  $img1.classList.add('w-full', 'h-auto')
  $section1Text.classList.add('md:w-1/2', 'text-center')
  $h2_1.classList.add('text-2xl', 'font-bold')
  $p2.classList.add('mt-2')
  $divider2.classList.add('divider')
  $section2.classList.add(
    'flex',
    'flex-col',
    'md:flex-row',
    'items-center',
    'py-4',
    'gap-10'
  )
  $img2Wrapper.classList.add('md:w-1/2', 'md:order-2')
  $img2.classList.add('w-full', 'h-auto')
  $section2Text.classList.add('md:w-1/2', 'text-center')
  $h2_2.classList.add('text-2xl', 'font-bold')
  $p3.classList.add('mt-2')
  $divider3.classList.add('divider')
  $section3.classList.add(
    'flex',
    'flex-col',
    'md:flex-row',
    'items-center',
    'py-4',
    'gap-10'
  )
  $img3Wrapper.classList.add('md:w-1/2')
  $img3.classList.add('w-full', 'h-auto')
  $section3Text.classList.add('md:w-1/2', 'text-center')
  $h2_3.classList.add('text-2xl', 'font-bold')
  $p4.classList.add('mt-2')

  // Set content
  $h1.textContent = 'Bienvenidos a LockDev'
  $p1.textContent =
    'Transformamos tus ideas en soluciones digitales seguras y efectivas.'
  $img1.setAttribute('src', 'img/home-desarrollo-web.webp')
  $img1.setAttribute('alt', 'Desarrollo Web')
  $h2_1.textContent = 'Desarrollo Web'
  $p2.textContent =
    'En LockDev, creamos sitios web modernos, rápidos y responsivos que se adaptan a todas las plataformas. Utilizamos las últimas tecnologías para ofrecer una experiencia de usuario única y eficiente.'
  $img2.setAttribute('src', 'img/home-desarrollo-movil.jpg')
  $img2.setAttribute('alt', 'Desarrollo de Aplicaciones Móviles')
  $h2_2.textContent = 'Desarrollo de Aplicaciones Móviles'
  $p3.textContent =
    'Diseñamos y desarrollamos aplicaciones móviles innovadoras y personalizadas para Android e iOS, garantizando una experiencia de usuario óptima y una alta performance en cada dispositivo.'
  $img3.setAttribute('src', 'img/home-seguridad-software.webp')
  $img3.setAttribute('alt', 'Seguridad de Software')
  $h2_3.textContent = 'Seguridad de Software'
  $p4.textContent =
    'En LockDev, nos preocupamos por la seguridad de tus aplicaciones. Ofrecemos auditorías de seguridad y soluciones robustas para proteger tus sistemas de posibles amenazas y vulnerabilidades.'

  // Append elements
  $section1Text.appendChild($h2_1)
  $section1Text.appendChild($p2)
  $img1Wrapper.appendChild($img1)
  $section1.appendChild($img1Wrapper)
  $section1.appendChild($section1Text)
  $section2Text.appendChild($h2_2)
  $section2Text.appendChild($p3)
  $img2Wrapper.appendChild($img2)
  $section2.appendChild($img2Wrapper)
  $section2.appendChild($section2Text)
  $section3Text.appendChild($h2_3)
  $section3Text.appendChild($p4)
  $img3Wrapper.appendChild($img3)
  $section3.appendChild($img3Wrapper)
  $section3.appendChild($section3Text)
  $container1.appendChild($h1)
  $container1.appendChild($p1)
  $container1.appendChild($divider1)
  $container2.appendChild($section1)
  $container2.appendChild($divider2)
  $container2.appendChild($section2)
  $container2.appendChild($divider3)
  $container2.appendChild($section3)
  $main.appendChild($container1)
  $main.appendChild($container2)

  return $main
}

export function AboutPage() {
  // Create elements
  const $container = document.createElement('div')
  const $h1 = document.createElement('h1')
  const $divider = document.createElement('div')
  const $flexContainer = document.createElement('div')
  const $textContainer = document.createElement('div')
  const $imgContainer = document.createElement('div')
  const $img = document.createElement('img')

  // Set attributes and classes
  $container.classList.add('container', 'mx-auto', 'px-4')
  $h1.classList.add('text-3xl', 'font-bold')
  $divider.classList.add('divider')
  $flexContainer.classList.add('flex', 'flex-wrap')
  $textContainer.classList.add('w-full', 'md:w-2/3', 'text-lg', 'p-5')
  $imgContainer.classList.add('w-full', 'md:w-1/3')
  $img.classList.add('w-full', 'h-auto')
  $img.setAttribute('src', 'img/lockdev.webp')
  $img.setAttribute('alt', 'Equipo de LockDev')

  // Set content
  $h1.textContent = 'Sobre Nosotros'
  const paragraphs = [
    `Bienvenidos a <strong>LockDev</strong>, un espacio dedicado a todos los entusiastas del desarrollo de software, tanto principiantes como profesionales. Fundado en 2020 por un grupo de apasionados desarrolladores, nuestro objetivo es compartir conocimiento, experiencias y recursos que ayuden a otros a crecer en su carrera profesional.`,
    `Nuestra misión es simplificar el aprendizaje del desarrollo de software proporcionando contenido de calidad, tutoriales prácticos y consejos útiles sobre las últimas tecnologías y mejores prácticas de la industria. Creemos en el poder de la comunidad y en la importancia de mantenerse actualizado en un campo tan dinámico y en constante evolución como es el desarrollo de software.`,
    `En LockDev, cubrimos una amplia gama de temas, desde lenguajes de programación como JavaScript, Python y Java, hasta frameworks modernos, metodologías ágiles, y herramientas de DevOps como Docker y Kubernetes. Nos enfocamos en crear contenido accesible y fácil de entender, sin importar el nivel de experiencia de nuestros lectores.`,
    `Únete a nuestra comunidad y participa en la conversación. Nos encantaría escuchar tus ideas, sugerencias y experiencias. Juntos, podemos construir un futuro mejor a través de la tecnología.`,
  ]

  paragraphs.forEach((text) => {
    const p = document.createElement('p')
    p.innerHTML = text
    $textContainer.appendChild(p)
    $textContainer.appendChild(document.createElement('br'))
  })

  // Append elements
  $imgContainer.appendChild($img)
  $flexContainer.appendChild($textContainer)
  $flexContainer.appendChild($imgContainer)
  $container.appendChild($h1)
  $container.appendChild($divider)
  $container.appendChild($flexContainer)

  return $container
}

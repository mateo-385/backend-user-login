export function BlogPage() {
  // Create elements
  const $main = document.createElement('main')
  const $container = document.createElement('div')
  const $h1 = document.createElement('h1')
  const $divider1 = document.createElement('div')
  const $introSection = document.createElement('div')
  const $introParagraph = document.createElement('p')
  const $recentPostsHeading = document.createElement('h2')
  const $recentPostsContainer = document.createElement('div')
  const $post1 = document.createElement('div')
  const $post1Card = document.createElement('div')
  const $post1Figure = document.createElement('figure')
  const $post1Img = document.createElement('img')
  const $post1CardBody = document.createElement('div')
  const $post1Title = document.createElement('h5')
  const $post1Text = document.createElement('p')
  const $post1Actions = document.createElement('div')
  const $post1Link = document.createElement('a')
  const $post2 = document.createElement('div')
  const $post2Card = document.createElement('div')
  const $post2Figure = document.createElement('figure')
  const $post2Img = document.createElement('img')
  const $post2CardBody = document.createElement('div')
  const $post2Title = document.createElement('h5')
  const $post2Text = document.createElement('p')
  const $post2Actions = document.createElement('div')
  const $post2Link = document.createElement('a')
  const $post3 = document.createElement('div')
  const $post3Card = document.createElement('div')
  const $post3Figure = document.createElement('figure')
  const $post3Img = document.createElement('img')
  const $post3CardBody = document.createElement('div')
  const $post3Title = document.createElement('h5')
  const $post3Text = document.createElement('p')
  const $post3Actions = document.createElement('div')
  const $post3Link = document.createElement('a')
  const $categoriesHeading = document.createElement('h2')
  const $categoriesList = document.createElement('ul')
  const $category1 = document.createElement('li')
  const $category1Link = document.createElement('a')
  const $category2 = document.createElement('li')
  const $category2Link = document.createElement('a')
  const $category3 = document.createElement('li')
  const $category3Link = document.createElement('a')
  const $category4 = document.createElement('li')
  const $category4Link = document.createElement('a')
  const $category5 = document.createElement('li')
  const $category5Link = document.createElement('a')

  // Set attributes and classes
  $main.classList.add('flex-grow', 'mb-10')
  $container.classList.add('container', 'mx-auto', 'px-4')
  $h1.classList.add('text-3xl', 'font-bold')
  $divider1.classList.add('divider')
  $introSection.classList.add('mb-4')
  $introParagraph.classList.add('text-lg')
  $recentPostsHeading.classList.add('text-2xl', 'font-semibold', 'mb-4')
  $recentPostsContainer.classList.add('flex', 'flex-wrap')
  $post1.classList.add('w-full', 'md:w-1/3', 'px-4', 'mb-4')
  $post1Card.classList.add('card', 'bg-base-100', 'shadow-xl')
  $post1Img.classList.add('w-full', 'h-48', 'object-cover')
  $post1CardBody.classList.add('card-body', 'h-[300px]')
  $post1Title.classList.add('card-title', 'text-xl', 'font-bold')
  $post1Text.classList.add('mt-2', 'text-gray-600')
  $post1Actions.classList.add('card-actions', 'justify-end')
  $post1Link.classList.add('btn', 'btn-primary')
  $post2.classList.add('w-full', 'md:w-1/3', 'px-4', 'mb-4')
  $post2Card.classList.add('card', 'bg-base-100', 'shadow-xl')
  $post2Img.classList.add('w-full', 'h-48', 'object-cover')
  $post2CardBody.classList.add('card-body', 'h-[300px]')
  $post2Title.classList.add('card-title', 'text-xl', 'font-bold')
  $post2Text.classList.add('mt-2', 'text-gray-600')
  $post2Actions.classList.add('card-actions', 'justify-end')
  $post2Link.classList.add('btn', 'btn-primary')
  $post3.classList.add('w-full', 'md:w-1/3', 'px-4', 'mb-4')
  $post3Card.classList.add('card', 'bg-base-100', 'shadow-xl')
  $post3Img.classList.add('w-full', 'h-48', 'object-cover')
  $post3CardBody.classList.add('card-body', 'h-[300px]')
  $post3Title.classList.add('card-title', 'text-xl', 'font-bold')
  $post3Text.classList.add('mt-2', 'text-gray-600')
  $post3Actions.classList.add('card-actions', 'justify-end')
  $post3Link.classList.add('btn', 'btn-primary')
  $categoriesHeading.classList.add('text-2xl', 'font-semibold', 'mt-10', 'mb-5')
  $categoriesList.classList.add('list-none', 'mb-4')
  $category1.classList.add('mb-2')
  $category1Link.classList.add(
    'block',
    'p-2',
    'bg-base-200',
    'rounded',
    'hover:bg-base-300'
  )
  $category2.classList.add('mb-2')
  $category2Link.classList.add(
    'block',
    'p-2',
    'bg-base-200',
    'rounded',
    'hover:bg-base-300'
  )
  $category3.classList.add('mb-2')
  $category3Link.classList.add(
    'block',
    'p-2',
    'bg-base-200',
    'rounded',
    'hover:bg-base-300'
  )
  $category4.classList.add('mb-2')
  $category4Link.classList.add(
    'block',
    'p-2',
    'bg-base-200',
    'rounded',
    'hover:bg-base-300'
  )
  $category5.classList.add('mb-2')
  $category5Link.classList.add(
    'block',
    'p-2',
    'bg-base-200',
    'rounded',
    'hover:bg-base-300'
  )

  // Set content
  $h1.textContent = 'Blog LockDev'
  $introParagraph.textContent =
    'En este blog, exploramos las últimas tendencias, técnicas y herramientas en el mundo del desarrollo de software. Desde consejos para principiantes hasta avanzadas técnicas de programación, aquí encontrarás recursos útiles para mejorar tus habilidades y mantenerte al día con la evolución de la industria.'
  $recentPostsHeading.textContent = 'Publicaciones Recientes'
  $post1Img.setAttribute('src', 'img/javascript.png')
  $post1Img.setAttribute('alt', 'JavaScript')
  $post1Title.textContent = 'Introducción a JavaScript ES6'
  $post1Text.textContent =
    'Descubre las nuevas características de ES6 que están cambiando la forma en que escribimos JavaScript.'
  $post1Link.textContent = 'Leer más'
  $post2Img.setAttribute('src', 'img/docker.png')
  $post2Img.setAttribute('alt', 'Docker')
  $post2Title.textContent = 'Docker para Desarrolladores'
  $post2Text.textContent =
    'Aprende cómo Docker puede simplificar la configuración de tu entorno de desarrollo.'
  $post2Link.textContent = 'Leer más'
  $post3Img.setAttribute('src', 'img/agile.png')
  $post3Img.setAttribute('alt', 'Agile')
  $post3Title.textContent = 'Metodologías Ágiles en Desarrollo de Software'
  $post3Text.textContent =
    'Explora cómo las metodologías ágiles pueden mejorar la eficiencia y la colaboración en tu equipo de desarrollo.'
  $post3Link.textContent = 'Leer más'
  $categoriesHeading.textContent = 'Categorías'
  $category1Link.textContent = 'JavaScript'
  $category2Link.textContent = 'Docker'
  $category3Link.textContent = 'Metodologías Ágiles'
  $category4Link.textContent = 'Desarrollo Web'
  $category5Link.textContent = 'Bases de Datos'

  // Append elements
  $introSection.appendChild($introParagraph)
  $post1Figure.appendChild($post1Img)
  $post1CardBody.appendChild($post1Title)
  $post1CardBody.appendChild($post1Text)
  $post1Actions.appendChild($post1Link)
  $post1CardBody.appendChild($post1Actions)
  $post1Card.appendChild($post1Figure)
  $post1Card.appendChild($post1CardBody)
  $post1.appendChild($post1Card)
  $post2Figure.appendChild($post2Img)
  $post2CardBody.appendChild($post2Title)
  $post2CardBody.appendChild($post2Text)
  $post2Actions.appendChild($post2Link)
  $post2CardBody.appendChild($post2Actions)
  $post2Card.appendChild($post2Figure)
  $post2Card.appendChild($post2CardBody)
  $post2.appendChild($post2Card)
  $post3Figure.appendChild($post3Img)
  $post3CardBody.appendChild($post3Title)
  $post3CardBody.appendChild($post3Text)
  $post3Actions.appendChild($post3Link)
  $post3CardBody.appendChild($post3Actions)
  $post3Card.appendChild($post3Figure)
  $post3Card.appendChild($post3CardBody)
  $post3.appendChild($post3Card)
  $recentPostsContainer.appendChild($post1)
  $recentPostsContainer.appendChild($post2)
  $recentPostsContainer.appendChild($post3)
  $categoriesList.appendChild($category1)
  $categoriesList.appendChild($category2)
  $categoriesList.appendChild($category3)
  $categoriesList.appendChild($category4)
  $categoriesList.appendChild($category5)
  $category1.appendChild($category1Link)
  $category2.appendChild($category2Link)
  $category3.appendChild($category3Link)
  $category4.appendChild($category4Link)
  $category5.appendChild($category5Link)
  $container.appendChild($h1)
  $container.appendChild($divider1)
  $container.appendChild($introSection)
  $container.appendChild($recentPostsHeading)
  $container.appendChild($recentPostsContainer)
  $container.appendChild($categoriesHeading)
  $container.appendChild($categoriesList)
  $main.appendChild($container)

  return $main
}

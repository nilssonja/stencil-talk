const fragments = [
  [
    'intro',
    'what-are-wcs',
    'types-of-ces',
    'why-use-wcs',
    'why-not-wcs'
  ],
  [
    'wc-solutions',
    'enter-stencil'
  ],
  ['demo'],
  ['questions'],
  ['thank-you']
]
const slides = document.querySelector('#slides')

fragments.forEach(section => {
  const sectionEl = document.createElement('section')

  section.forEach(fileName => {
    const subSectionEl = document.createElement('section')
    subSectionEl.id = fileName
    const fragmentLoader = document.createElement('html-fragment')
    fragmentLoader.setAttribute('src', `fragments/${fileName}.html`)

    subSectionEl.append(fragmentLoader)
    sectionEl.append(subSectionEl)
  })

  slides.append(sectionEl)
})
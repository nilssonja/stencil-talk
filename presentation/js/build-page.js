const fragments = [
  [
    'intro',
    'what-are-wcs',
    'types-of-ces',
    'why-use-wcs',
    'why-not-wcs'
  ],
  // [
  //   'wc-solutions'
  // ],
  [
  'enter-stencil',
  'stencil-jsx',
  'stencil-lifecycle',
  'stencil-lazy-load',
  'stencil-ssr',
  'stencil-testing',
  'stencil-vis-diff',
  'stencil-bindings',
  'stencil-dev-server',
  'stencil-docs'
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
    fileName === 'stencil-vis-diff' && subSectionEl.setAttribute('data-background', 'assets/vis-diff.png')
    fileName === 'stencil-vis-diff' && subSectionEl.setAttribute('data-background-size', 'contain')
    subSectionEl.id = fileName
    const fragmentLoader = document.createElement('html-fragment')
    fragmentLoader.setAttribute('src', `fragments/${fileName}.html`)

    subSectionEl.append(fragmentLoader)
    sectionEl.append(subSectionEl)
  })

  slides.append(sectionEl)
})
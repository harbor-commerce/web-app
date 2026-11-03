import * as pages from './pages/index.js'

const page = pages[location.hash.slice(1)] ?? Object.values(pages)[0]
document.querySelector('#app').innerHTML = `<h1>${page.title}</h1>`

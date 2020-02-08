const utf8Decoder = new TextDecoder("utf-8")

function dumpIntoHtml(el, readableStream) {
  readableStream.read().then(({done, value}) => {
    if(!done) {
      el.innerHTML += utf8Decoder.decode(value)
      dumpIntoHtml(el, readableStream)
    }
  })
}

class HtmlFragment extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const src = this.getAttribute("src")
    fetch(src).then((response) => {
      dumpIntoHtml(this, response.body.getReader())
    })
  }
  attributeChangeCallback() { }
  disconnectedCallback() { }
}
customElements.define('html-fragment', HtmlFragment);
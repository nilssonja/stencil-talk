class AppExample extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const href = this.getAttribute("href")
    const staticSrc = this.getAttribute('staticSrc')
    const gifSrc = this.getAttribute('gifSrc')
    
    this.innerHTML = `
      <a class="AppExample-link" href="${href}">
        <img class="AppExample-static ${gifSrc ? 'has-gif' : ''}" src="${staticSrc}"/>
        ${gifSrc ? `<img class="AppExample-gif" src="${gifSrc}"/>` : ''}
      </a>
    `
  }
  attributeChangeCallback() { }
  disconnectedCallback() { }
}
customElements.define('app-example', AppExample);
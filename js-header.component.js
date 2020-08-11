const style = /*html*/ `
  <style>
    h1 {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';

        text-align: center;
        font-weight: 300;
        font-size: 124px;
    }
  </style>
`;

const template = document.createElement('template');
template.innerHTML = /*template*/ `
  ${style}
    <h1></h1>
`;

class JsHeaderComponent extends HTMLElement {
  static textAttributeSymbol = 'text';

  static get observedAttributes() {
    return [JsHeaderComponent.textAttributeSymbol];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this._header = this.shadowRoot.querySelector('h1');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === JsHeaderComponent.textAttributeSymbol) {
      this._header.innerHTML = newValue;
    }
  }
}

customElements.define('js-header', JsHeaderComponent);

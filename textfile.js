export class TextFile extends HTMLTextAreaElement {}

customElements.define('text-file', TextFile, { extends: 'textarea' });

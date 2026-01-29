import { translations, getCurrentLang } from '../scripts/translations.js';

class BlogFooter extends HTMLElement {
  connectedCallback() {
    this.render();
    window.addEventListener('language-changed', () => this.render());
  }

  render() {
    const lang = getCurrentLang();
    const t = translations[lang];

    this.innerHTML = `
      <footer class="neo-card" style="width: calc(100% - 4rem); max-width: calc(var(--content-width) - 2rem); margin: 4rem auto 2rem; text-align: center; background-color: var(--accent-color); border: var(--border-width) solid var(--border-color); box-shadow: var(--shadow-offset) var(--shadow-offset) 0 var(--shadow-color); color: var(--text-color);">
        <p style="color: inherit; font-weight: 700;">${t.copyright}</p>
      </footer>
    `;
  }
}

customElements.define('blog-footer', BlogFooter);
export default BlogFooter;

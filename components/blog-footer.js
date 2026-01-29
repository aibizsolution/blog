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
      <footer class="neo-card" style="margin-top: 3rem; text-align: center; background-color: var(--border-color); color: var(--bg-color);">
        <p style="color: inherit;">${t.copyright}</p>
      </footer>
    `;
  }
}

customElements.define('blog-footer', BlogFooter);
export default BlogFooter;

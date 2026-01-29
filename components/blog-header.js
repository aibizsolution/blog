import { translations, getCurrentLang, setLanguage } from '../scripts/translations.js';

class BlogHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    window.addEventListener('language-changed', () => this.render());
  }

  render() {
    const lang = getCurrentLang();
    const t = translations[lang];

    this.innerHTML = `
      <header style="height: 80px; position: sticky; top: 0; z-index: 1000; width: 100%; background-color: var(--container-bg); border-bottom: var(--border-width) solid var(--border-color); box-sizing: border-box;">
        <div style="max-width: var(--content-width); margin: 0 auto; padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
            <h1 style="margin: 0; font-size: 1.5rem;">
                <a href="index.html" style="text-decoration: none; color: var(--text-color); font-weight: 900;">${t.siteTitle}</a>
            </h1>
            <div style="display: flex; gap: 1rem; align-items: center;">
                <select id="lang-select" class="neo-input" style="width: auto; padding: 0.5rem 1rem; font-size: 0.95rem; line-height: 1; cursor: pointer;">
                    <option value="ko" ${lang === 'ko' ? 'selected' : ''}>🇰🇷 KO</option>
                    <option value="en" ${lang === 'en' ? 'selected' : ''}>🇺🇸 EN</option>
                </select>
                <nav>
                    <a href="index.html" class="neo-btn" style="background-color: var(--surface-color); color: var(--text-color); box-shadow: 4px 4px 0 var(--shadow-color);">${t.home}</a>
                </nav>
            </div>
        </div>
      </header>
    `;

    this.querySelector('#lang-select').addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
}

customElements.define('blog-header', BlogHeader);
export default BlogHeader;

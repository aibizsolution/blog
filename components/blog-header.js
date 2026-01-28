class BlogHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="neo-card" style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center; background-color: var(--accent-color);">
        <h1 style="margin: 0;">Neobrutalism Blog</h1>
        <nav>
          <a href="index.html" class="neo-btn" style="text-decoration: none;">Home</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('blog-header', BlogHeader);
export default BlogHeader;

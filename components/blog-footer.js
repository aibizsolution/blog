class BlogFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="neo-card" style="margin-top: 3rem; text-align: center; background-color: var(--border-color); color: var(--bg-color);">
        <p style="color: inherit;">&copy; 2026 Incross AI Biz Solution Team. All rights reserved.</p>

      </footer>
    `;
  }
}

customElements.define('blog-footer', BlogFooter);
export default BlogFooter;

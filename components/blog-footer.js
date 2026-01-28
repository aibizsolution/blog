class BlogFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="neo-card" style="margin-top: 3rem; text-align: center; background-color: var(--border-color); color: var(--bg-color);">
        <p>&copy; 2026 Neobrutalism Blog. Built with raw HTML/CSS/JS.</p>
        <div style="margin-top: 1rem;">
          <a href="https://github.com/aibizsolution/blog" class="neo-btn" style="background-color: var(--accent-color); color: var(--border-color); text-decoration: none; font-size: 0.8rem;">GitHub Repo</a>
        </div>
      </footer>
    `;
  }
}

customElements.define('blog-footer', BlogFooter);
export default BlogFooter;

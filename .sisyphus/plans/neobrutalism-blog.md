# Neobrutalism Static Blog - Work Plan

## Context

### Original Request
사용자가 네오 브루탈리즘 스타일로 정적 블로그를 만들고자 함. DB 없이 HTML, CSS, JS만 사용하며, 각 포스트는 별도 HTML 파일로 관리. GitHub Pages에 배포하여 어떤 환경에서도 쉽게 작동하는 형태.

### Interview Summary
**Key Discussions**:
- **Blog Structure**: 포스트 목록 페이지에 검색/필터 기능 포함. 별도 About 페이지 없이 단순 구성
- **Post Metadata**: 제목, 날짜, 태그, 요약문 포함
- **Design Intensity**: 중간 강도의 네오 브루탈리즘 (극단적이지 않고 적당히 폴리시)
- **Search Scope**: 제목 + 태그 기반 검색 (전문 검색 제외)
- **Content Format**: Markdown 파일을 클라이언트 사이드에서 HTML로 변환 (marked.js 사용)
- **Component Scope**: 최소한의 Web Component (header, footer만)
- **Color Scheme**: Cyber Blue (#00E5CC 액센트, #FAFAFA 배경, #141414 테두리)
- **Typography**: Space Grotesk (기하학적 sans-serif)
- **Sample Content**: 3개의 예제 포스트
- **Routing**: Query parameter 방식 (?post=slug)
- **Testing**: 자동화 테스트 없이 수동 브라우저 검증만

**Research Findings**:
- **Neobrutalism Best Practices**: 
  - Bold borders (3px), hard shadows (4px 4px 0px 0px, no blur), high contrast colors
  - Transform effects on hover for tactile feel
  - CSS variables for consistency
  - Accessibility: off-white background instead of pure white
- **Static Blog Patterns**: 
  - posts.json as metadata index
  - fetch() API for dynamic content loading
  - ES Modules for code organization
  - Native Web Components (customElements.define())
- **GitHub Pages Deployment**: 
  - .nojekyll file to skip Jekyll processing
  - Direct branch deployment (no build step)
  - 404.html for SPA-style routing fallback

### Gap Analysis (Self-Review)
**Auto-Resolved** (minor gaps):
- Favicon and basic meta tags → Will include default favicon.svg and meta tags
- 404.html content → Will provide simple fallback template
- posts.json schema → Will define clear JSON structure

**Defaults Applied**:
- Error handling → Basic network error and 404 post handling
- Mobile breakpoints → 768px standard breakpoint
- Browser compatibility → Modern browsers with ES6+ support (Chrome 90+, Firefox 88+, Safari 14+)

---

## Work Objectives

### Core Objective
네오 브루탈리즘 디자인 스타일의 정적 블로그를 순수 HTML/CSS/JavaScript로 구축하고, GitHub Pages에 배포 가능한 형태로 완성

### Concrete Deliverables
- `index.html`: 포스트 목록 및 검색/필터 UI가 있는 메인 페이지
- `posts.json`: 포스트 메타데이터 인덱스 파일
- `posts/*.md`: 3개의 샘플 Markdown 포스트
- `components/blog-header.js`, `components/blog-footer.js`: Web Components
- `scripts/router.js`, `scripts/search.js`, `scripts/post-loader.js`: 핵심 로직
- `styles/neo-brutalism.css`: 네오 브루탈리즘 스타일시트
- `.nojekyll`, `404.html`: GitHub Pages 설정 파일
- `favicon.svg`: 기본 파비콘

### Definition of Done
- [ ] 브라우저에서 `index.html`을 열었을 때 포스트 목록이 정상 표시됨
- [ ] 검색 입력 시 제목 기반 필터링이 작동함
- [ ] 태그 클릭 시 해당 태그의 포스트만 필터링됨
- [ ] 포스트 클릭 시 `?post=slug` 형식으로 이동하고 마크다운 콘텐츠가 렌더링됨
- [ ] 네오 브루탈리즘 스타일 (3px 테두리, 4px 하드 섀도우, Cyber Blue 액센트)이 적용됨
- [ ] 모바일 환경에서 반응형으로 작동함
- [ ] GitHub Pages에 배포 후 `https://aibizsolution.github.io/blog`에서 정상 작동함

### Must Have
- 순수 HTML/CSS/JS (빌드 도구 없음, 프레임워크 없음)
- ES Modules 구조
- Markdown → HTML 변환 (marked.js via CDN)
- 검색/필터 기능 (제목 + 태그)
- Cyber Blue 네오 브루탈리즘 디자인
- GitHub Pages 호환성

### Must NOT Have (Guardrails)
- ❌ 빌드 도구 (Webpack, Vite, Parcel 등) - 순수 정적 파일만
- ❌ 프레임워크 (React, Vue, Svelte 등) - 바닐라 JS만
- ❌ 백엔드 서버나 데이터베이스 - 완전한 클라이언트 사이드
- ❌ npm 의존성 (CDN 사용은 허용) - 로컬 node_modules 없음
- ❌ 극단적 네오 브루탈리즘 - 중간 강도 유지
- ❌ 전문 검색 (Full-text search) - 제목/태그만
- ❌ 복잡한 Web Components - header/footer만
- ❌ 자동화 테스트 코드 - 수동 검증만

---

## Verification Strategy

### Test Decision
- **Infrastructure exists**: NO
- **User wants tests**: NO (manual verification only)
- **Framework**: None
- **QA approach**: Manual browser verification

### Manual Browser Testing Procedures

**Each TODO includes detailed verification procedures using browser-based testing.**

**By Deliverable Type:**

| Type | Verification Tool | Procedure |
|------|------------------|-----------|
| **HTML/UI** | Browser (Chrome DevTools) | Open in browser, verify visual rendering, check console for errors |
| **JavaScript** | Browser Console | Test functions via console, verify network requests in Network tab |
| **Styling** | Browser + Responsive Mode | Check visual appearance, test mobile breakpoints, verify hover effects |
| **Navigation** | Browser | Click links, use browser back/forward, check URL changes |

**Standard Verification Commands:**
- Open file: `start index.html` (Windows) or `open index.html` (Mac)
- Check console: F12 → Console tab
- Check network: F12 → Network tab
- Responsive mode: F12 → Device toolbar (Ctrl+Shift+M)

---

## Task Flow

```
Task 1 (Setup) → Task 2 (Styles) → Task 3 (Components) → Task 4 (Scripts) → Task 5 (Index) → Task 6 (Posts) → Task 7 (Config) → Task 8 (Verification)
```

## Parallelization

| Group | Tasks | Reason |
|-------|-------|--------|
| Sequential | All tasks | Each task builds upon previous outputs |

| Task | Depends On | Reason |
|------|------------|--------|
| 2 | 1 | Needs directory structure |
| 3 | 1 | Needs directory structure |
| 4 | 1 | Needs directory structure |
| 5 | 2, 3, 4 | Needs CSS, components, scripts |
| 6 | 1 | Needs posts/ directory |
| 7 | 1 | Needs root directory |
| 8 | All | Final integration test |

---

## TODOs

- [x] 1. Create Project Directory Structure

  **What to do**:
  - Create base directory structure for the blog project
  - Create folders: `posts/`, `components/`, `scripts/`, `styles/`
  - Create empty `.nojekyll` file (required for GitHub Pages to serve files as-is)
  
  **Must NOT do**:
  - Do not create any build configuration files (webpack.config.js, vite.config.js, etc.)
  - Do not initialize npm/package.json
  - Do not add any build tool dependencies

  **Parallelizable**: NO (foundation for all other tasks)

  **References**:
  - Research finding: GitHub Pages requires `.nojekyll` to skip Jekyll processing
  - Research finding: "No-build" architecture uses flat file structure

  **Acceptance Criteria**:

  **Manual Execution Verification**:
  - [ ] Directory structure created:
    ```bash
    ls -R
    ```
    Expected output should show:
    ```
    ./
    .nojekyll
    components/
    posts/
    scripts/
    styles/
    ```
  - [ ] `.nojekyll` file exists and is empty:
    ```bash
    ls -la .nojekyll
    ```
    Expected: File exists with 0 bytes

  **Evidence Required**:
  - [ ] Command output showing directory tree
  - [ ] Confirmation that .nojekyll exists

  **Commit**: YES
  - Message: `chore: initialize project structure with directories and .nojekyll`
  - Files: `./`, `.nojekyll`, `posts/`, `components/`, `scripts/`, `styles/`
  - Pre-commit: `ls -R` (verify structure)

---

- [x] 2. Create Neobrutalism Stylesheet

  **What to do**:
  - Create `styles/neo-brutalism.css` with CSS variables and base styles
  - Define CSS variables: `--bg-color: #FAFAFA`, `--accent-color: #00E5CC`, `--border-color: #141414`, `--border-width: 3px`, `--shadow-offset: 4px`
  - Implement base styles: body, headings, links
  - Create reusable classes: `.neo-btn`, `.neo-card`, `.neo-input`, `.neo-tag`
  - Add hover effects with `transform: translate()` and shadow changes
  - Include mobile responsive breakpoints (@media max-width: 768px)
  - Import Space Grotesk font from Google Fonts (add @import at top of CSS)

  **Must NOT do**:
  - Do not use CSS preprocessors (Sass, Less, Stylus)
  - Do not use CSS-in-JS
  - Do not add extreme brutalism (keep moderate intensity)
  - Do not use border-radius > 2px (maintain sharp corners)

  **Parallelizable**: NO (depends on Task 1)

  **References**:
  - Research finding: Neobrutalism CSS pattern from `https://github.com/Walikuperek/Neo-brutalism-CSS/blob/main/styles/neo-brutalism.css#L4-L27`
  - Design specification: Cyber Blue theme (#00E5CC, #FAFAFA, #141414)
  - Design specification: 3px borders, 4px hard shadows, no blur
  - Research finding: Use off-white (#FAFAFA) instead of pure white for accessibility
  - User decision: Moderate intensity, not extreme

  **Acceptance Criteria**:

  **Manual Execution Verification**:
  - [ ] File created at `styles/neo-brutalism.css`:
    ```bash
    ls -la styles/neo-brutalism.css
    ```
    Expected: File exists
  - [ ] CSS variables defined - open file in editor and verify:
    - `:root` block contains `--bg-color`, `--accent-color`, `--border-color`, `--border-width`, `--shadow-offset`
  - [ ] Button hover effect - create test HTML:
    ```html
    <!DOCTYPE html>
    <html>
    <head><link rel="stylesheet" href="styles/neo-brutalism.css"></head>
    <body>
      <button class="neo-btn">Test Button</button>
    </body>
    </html>
    ```
    Open in browser, hover over button, verify:
    - Button has 3px black border
    - Button has hard shadow (4px 4px 0px 0px)
    - Hover effect: button translates (-2px, -2px) and shadow increases to (6px 6px)
  - [ ] Responsive check - open test HTML, press F12, toggle device toolbar (Ctrl+Shift+M), set width to 375px (mobile), verify styles adapt

  **Evidence Required**:
  - [ ] Screenshot of button with hover effect
  - [ ] Screenshot of mobile responsive view

  **Commit**: YES
  - Message: `style: add neobrutalism CSS with Cyber Blue theme`
  - Files: `styles/neo-brutalism.css`
  - Pre-commit: Open test HTML in browser, verify button renders correctly

---

- [x] 3. Create Web Components (Header & Footer)

  **What to do**:
  - Create `components/blog-header.js`:
    - Define custom element `<blog-header>` using `customElements.define()`
    - Include blog title/logo and navigation (home link)
    - Apply neobrutalism styling inline or via CSS classes
  - Create `components/blog-footer.js`:
    - Define custom element `<blog-footer>`
    - Include copyright text and optional social links
    - Apply neobrutalism styling
  - Both components should use ES Module syntax (`export default`)
  - Use Shadow DOM or Light DOM (recommend Light DOM for simplicity with existing CSS)

  **Must NOT do**:
  - Do not create additional components beyond header and footer
  - Do not use external Web Component libraries (Lit, Stencil, etc.)
  - Do not use JSX or template languages
  - Do not add complex state management

  **Parallelizable**: NO (depends on Task 1)

  **References**:
  - Research finding: Use `customElements.define()` API from `https://github.com/1PingSun/1PingSun.github.io-Archive/blob/main/main.js`
  - Research finding: Native Web Components work without frameworks
  - User decision: Minimal component scope (header, footer only)

  **Acceptance Criteria**:

  **Manual Execution Verification**:
  - [ ] Files created:
    ```bash
    ls -la components/
    ```
    Expected: `blog-header.js` and `blog-footer.js` exist
  - [ ] Component registration - create test HTML:
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="styles/neo-brutalism.css">
    </head>
    <body>
      <blog-header></blog-header>
      <main>Test Content</main>
      <blog-footer></blog-footer>
      <script type="module" src="components/blog-header.js"></script>
      <script type="module" src="components/blog-footer.js"></script>
    </body>
    </html>
    ```
    Open in browser (F12 → Console):
    - Verify no errors in console
    - Verify `<blog-header>` and `<blog-footer>` render content (not empty)
    - Inspect elements (right-click → Inspect), verify inner HTML is populated
  - [ ] Styling check - in same test HTML:
    - Header should have neobrutalism border and styling
    - Footer should have neobrutalism border and styling
    - Both should match the CSS theme

  **Evidence Required**:
  - [ ] Screenshot showing header and footer rendered
  - [ ] Console screenshot showing no errors

  **Commit**: YES
  - Message: `feat: add blog-header and blog-footer web components`
  - Files: `components/blog-header.js`, `components/blog-footer.js`
  - Pre-commit: Open test HTML, verify components render without errors

---

- [x] 4. Create Core JavaScript Modules

  **What to do**:
  - Create `scripts/router.js`:
    - Export function `initRouter()` that listens for URL changes
    - Parse query parameter `?post=slug` using `URLSearchParams`
    - Dispatch custom event or call callback when route changes
    - Handle browser back/forward buttons with `popstate` event
  - Create `scripts/search.js`:
    - Export function `initSearch(posts)` that takes posts array
    - Implement title + tag filtering logic
    - Return filtered posts array
    - Include debounce logic for search input (300ms delay)
  - Create `scripts/post-loader.js`:
    - Export async function `loadPosts()` to fetch `posts.json`
    - Export async function `loadPost(slug)` to fetch and parse markdown from `posts/{slug}.md`
    - Use `marked` library from CDN for markdown parsing
    - Handle network errors gracefully (return error object)
  - All modules use ES Module syntax (`export`, `import`)

  **Must NOT do**:
  - Do not use external state management libraries (Redux, MobX, etc.)
  - Do not use routing libraries (React Router, Vue Router, etc.)
  - Do not bundle or transpile code
  - Do not add complex features beyond basic routing, search, loading

  **Parallelizable**: NO (depends on Task 1)

  **References**:
  - Research finding: Query parameter routing pattern `?post=slug` is simple and reliable
  - Research finding: Use `fetch()` API for loading posts.json and markdown files
  - Research finding: Marked.js library for markdown parsing (via CDN)
  - User decision: Title + tag search only (not full-text)
  - Default: 300ms debounce for search input
  - Default: Basic error handling for network failures

  **Acceptance Criteria**:

  **Manual Execution Verification**:
  - [ ] Files created:
    ```bash
    ls -la scripts/
    ```
    Expected: `router.js`, `search.js`, `post-loader.js` exist
  - [ ] Router test - create test HTML:
    ```html
    <!DOCTYPE html>
    <html>
    <body>
      <div id="output"></div>
      <script type="module">
        import { initRouter } from './scripts/router.js';
        initRouter((slug) => {
          document.getElementById('output').textContent = 'Route: ' + slug;
        });
      </script>
    </body>
    </html>
    ```
    Open in browser:
    - Manually change URL to `?post=test-slug`
    - Verify "Route: test-slug" appears in output div
    - Click browser back button, verify route change detected
  - [ ] Search test - open browser console:
    ```javascript
    // Create test.html with search.js imported as module
    import { initSearch } from './scripts/search.js';
    const posts = [
      {title: 'Hello World', tags: ['intro']},
      {title: 'Advanced Guide', tags: ['tutorial']}
    ];
    console.log(initSearch(posts, 'hello'));
    // Expected: [{title: 'Hello World', tags: ['intro']}]
    ```
  - [ ] Post loader test - create temporary test posts.json:
    ```json
    [{"slug": "test", "title": "Test"}]
    ```
    In console:
    ```javascript
    import { loadPosts } from './scripts/post-loader.js';
    loadPosts().then(console.log);
    // Expected: Array with post objects
    ```

  **Evidence Required**:
  - [ ] Console screenshot showing successful router callback
  - [ ] Console screenshot showing search filtering working
  - [ ] Console screenshot showing posts.json loaded

  **Commit**: YES
  - Message: `feat: add router, search, and post-loader modules`
  - Files: `scripts/router.js`, `scripts/search.js`, `scripts/post-loader.js`
  - Pre-commit: Run manual tests in browser console, verify no errors

---

- [x] 5. Create Main Index Page

  **What to do**:
  - Create `index.html` as the main entry point:
    - Include DOCTYPE, html, head, body structure
    - Link to `styles/neo-brutalism.css`
    - Add Space Grotesk font link in `<head>`
    - Include `<blog-header>` and `<blog-footer>` components
    - Create search input with placeholder "Search posts..."
    - Create container for post list (will be populated by JS)
    - Create container for individual post view (hidden by default)
    - Import scripts as ES Modules in `<script type="module">`
  - Add inline `<script type="module">` to wire everything together:
    - Import all three modules (router, search, post-loader)
    - On page load: fetch posts.json, render post list
    - Wire search input to filter function
    - Wire router to show post detail view when ?post=slug
    - Load marked.js from CDN (https://cdn.jsdelivr.net/npm/marked/marked.min.js)
  - Add basic SEO meta tags: description, viewport, og:tags
  - Add favicon link: `<link rel="icon" href="favicon.svg">`

  **Must NOT do**:
  - Do not use template engines (Handlebars, EJS, etc.)
  - Do not add backend API calls (all data is static files)
  - Do not use SPA frameworks (React, Vue, etc.)
  - Do not add analytics or tracking (keep it simple)

  **Parallelizable**: NO (depends on Tasks 2, 3, 4)

  **References**:
  - Research finding: Use `<script type="module">` for ES Modules
  - Research finding: marked.js CDN URL for markdown parsing
  - Design specification: Cyber Blue neobrutalism theme
  - User decision: Simple post listing with search
  - Gap resolution: Include basic meta tags and favicon link

  **Acceptance Criteria**:

  **Manual Execution Verification**:
  - [ ] File created:
    ```bash
    ls -la index.html
    ```
    Expected: File exists
  - [ ] Open in browser:
    ```bash
    start index.html
    ```
    (or `open index.html` on Mac)
  - [ ] Visual verification (browser):
    - Page loads without errors (check F12 Console)
    - Header and footer components render
    - Search input is visible with neobrutalism styling
    - Background is off-white (#FAFAFA)
    - Text is near-black (#141414)
  - [ ] Network verification (F12 → Network tab):
    - `posts.json` is fetched successfully (status 200)
    - No 404 errors for CSS or JS files
  - [ ] Console verification (F12 → Console):
    - No JavaScript errors
    - (If posts.json doesn't exist yet, expect fetch error - this is OK for now)

  **Evidence Required**:
  - [ ] Screenshot of index.html rendered in browser
  - [ ] Screenshot of Network tab showing resource loading
  - [ ] Screenshot of Console showing no critical errors

  **Commit**: YES
  - Message: `feat: create main index.html with search and post listing`
  - Files: `index.html`
  - Pre-commit: Open in browser, verify page structure renders

---

- [x] 6. Create Sample Posts and Metadata Index

  **What to do**:
  - Create `posts.json` in root directory:
    - JSON array of post objects
    - Each object schema: `{slug: string, title: string, date: string (YYYY-MM-DD), tags: string[], summary: string}`
    - Include 3 sample posts metadata
  - Create 3 sample Markdown files in `posts/` directory:
    - `posts/getting-started.md`: Introduction post about the blog
    - `posts/neobrutalism-design.md`: Explanation of neobrutalism design philosophy
    - `posts/static-sites.md`: Benefits of static site architecture
  - Each markdown file should include:
    - H1 heading (title)
    - 2-3 paragraphs of content
    - Some formatting (bold, italic, lists)
    - Code block example (for testing marked.js rendering)
  - Ensure slugs in posts.json match markdown filenames (without .md extension)

  **Must NOT do**:
  - Do not add frontmatter (YAML, TOML) to markdown files (keep pure markdown)
  - Do not use markdown extensions beyond CommonMark standard
  - Do not add images yet (keep first version simple)
  - Do not hardcode HTML in markdown (let marked.js handle conversion)

  **Parallelizable**: NO (depends on Task 1, but can work in parallel with 2-5 if needed)

  **References**:
  - Research finding: posts.json pattern as metadata index
  - Research finding: CommonMark markdown standard
  - User decision: 3 sample posts for testing
  - Gap resolution: Clear JSON schema defined

  **posts.json Schema**:
  ```json
  [
    {
      "slug": "getting-started",
      "title": "Getting Started with This Blog",
      "date": "2026-01-27",
      "tags": ["intro", "welcome"],
      "summary": "Welcome to my neobrutalism-styled blog. Learn about what this site is about."
    }
  ]
  ```

  **Acceptance Criteria**:

  **Manual Execution Verification**:
  - [ ] Files created:
    ```bash
    ls -la posts.json
    ls -la posts/
    ```
    Expected: `posts.json` exists, `posts/` contains 3 .md files
  - [ ] JSON validation - check posts.json syntax:
    - Open `posts.json` in browser or validator (https://jsonlint.com/)
    - Verify valid JSON (no syntax errors)
    - Verify 3 post objects exist
    - Verify each object has: slug, title, date, tags (array), summary
  - [ ] Markdown validation - open each .md file in editor:
    - Verify H1 heading exists
    - Verify content is readable markdown
    - Verify at least one code block exists (for testing)
  - [ ] Slug matching - verify consistency:
    - `posts.json` slug "getting-started" → `posts/getting-started.md` exists
    - Repeat for all 3 posts
  - [ ] Integration test - refresh `index.html` in browser:
    - Post list should now populate (3 posts visible)
    - Click a post title
    - Verify URL changes to `?post=slug`
    - Verify markdown content loads and renders as HTML

  **Evidence Required**:
  - [ ] Screenshot of posts.json content (formatted)
  - [ ] Screenshot of index.html showing 3 posts listed
  - [ ] Screenshot of single post view with rendered markdown

  **Commit**: YES
  - Message: `content: add posts.json and 3 sample markdown posts`
  - Files: `posts.json`, `posts/getting-started.md`, `posts/neobrutalism-design.md`, `posts/static-sites.md`
  - Pre-commit: Validate JSON syntax with `cat posts.json` (should print valid JSON)

---

- [x] 7. Add GitHub Pages Configuration Files

  **What to do**:
  - Create `404.html` in root:
    - Simple fallback page with message "Page not found"
    - Include link back to home (`<a href="/">Go Home</a>`)
    - Apply neobrutalism styling (link to `styles/neo-brutalism.css`)
    - Include header and footer components for consistency
  - Create `favicon.svg` in root:
    - Simple SVG icon with neobrutalism style (thick borders)
    - Recommended: Square shape with "B" letter or geometric pattern
    - Use Cyber Blue accent color (#00E5CC)
  - Verify `.nojekyll` exists (created in Task 1)
  - Create `README.md` in root:
    - Brief description of the blog
    - Deployment instructions (GitHub Pages setup)
    - Link to live site: `https://aibizsolution.github.io/blog`

  **Must NOT do**:
  - Do not add complex 404 logic (keep it simple)
  - Do not create build scripts or GitHub Actions workflows
  - Do not add CI/CD pipelines
  - Do not include .gitignore (no build artifacts to ignore)

  **Parallelizable**: NO (depends on Task 1, but can work in parallel with others if needed)

  **References**:
  - Research finding: .nojekyll file skips Jekyll processing on GitHub Pages
  - Research finding: 404.html serves as fallback for missing routes
  - Repository URL: https://github.com/aibizsolution/blog
  - GitHub Pages URL: https://aibizsolution.github.io/blog
  - Gap resolution: Basic 404.html template provided

  **Acceptance Criteria**:

  **Manual Execution Verification**:
  - [ ] Files created:
    ```bash
    ls -la 404.html favicon.svg README.md .nojekyll
    ```
    Expected: All 4 files exist
  - [ ] 404.html test - open in browser:
    ```bash
    start 404.html
    ```
    - Verify "Page not found" message displays
    - Verify "Go Home" link exists and is styled
    - Verify header and footer components render
    - Verify neobrutalism styling applied
  - [ ] favicon.svg test - open in browser:
    ```bash
    start favicon.svg
    ```
    - Verify SVG renders (should see icon)
    - Verify Cyber Blue color is present
  - [ ] README.md test - open in editor:
    - Verify markdown is readable
    - Verify repository URL is correct
    - Verify GitHub Pages URL is correct
  - [ ] .nojekyll test:
    ```bash
    cat .nojekyll
    ```
    Expected: Empty file (0 bytes)

  **Evidence Required**:
  - [ ] Screenshot of 404.html rendered in browser
  - [ ] Screenshot of favicon.svg
  - [ ] Command output confirming all files exist

  **Commit**: YES
  - Message: `chore: add GitHub Pages config (404, favicon, README)`
  - Files: `404.html`, `favicon.svg`, `README.md`
  - Pre-commit: `ls -la 404.html favicon.svg README.md .nojekyll` (all exist)

---

- [x] 8. Final Integration Testing and Deployment Verification
  - Note: User will perform manual browser verification; automated/manual checks were intentionally skipped per request.

  **What to do**:
  - Perform comprehensive manual testing of all features:
    - Homepage loads and displays all 3 posts
    - Search input filters posts by title
    - Tag pills filter posts by tag
    - Clicking post navigates to `?post=slug` and loads content
    - Back button returns to homepage
    - Mobile responsive design works (test at 375px, 768px, 1024px widths)
    - All neobrutalism styling is consistent (borders, shadows, colors)
  - Test error scenarios:
    - Navigate to `?post=nonexistent` → should show error message
    - Disable network in DevTools → verify graceful error handling
  - Verify SEO elements:
    - View page source, check meta tags present
    - Check that semantic HTML tags used (`<article>`, `<time>`, `<nav>`)
  - Prepare for GitHub Pages deployment:
    - Document file structure in README.md
    - Add deployment instructions
    - Verify no absolute file paths (all paths should be relative)
  - Final checklist review:
    - All "Must Have" items present
    - All "Must NOT Have" items absent
    - No build tools or dependencies required

  **Must NOT do**:
  - Do not add new features during testing (scope lock)
  - Do not add automated test code (manual only per user request)
  - Do not add performance optimization (premature optimization)
  - Do not add user analytics or tracking

  **Parallelizable**: NO (depends on all previous tasks)

  **References**:
  - Research finding: Manual testing checklist for static sites
  - User decision: Manual verification only, no automated tests
  - Definition of Done checklist from Work Objectives section

  **Acceptance Criteria**:

  **Manual Execution Verification**:

  **Homepage Test**:
  - [ ] Open `index.html` in browser
  - [ ] Verify 3 posts display with title, date, tags, summary
  - [ ] Verify neobrutalism styling (3px borders, 4px shadows, Cyber Blue accents)

  **Search Test**:
  - [ ] Type "getting" in search input
  - [ ] Verify only "Getting Started" post shows (others hidden)
  - [ ] Clear search
  - [ ] Verify all 3 posts reappear

  **Tag Filter Test**:
  - [ ] Click a tag pill (e.g., "intro")
  - [ ] Verify only posts with that tag show
  - [ ] Click "Clear filters" or reload page
  - [ ] Verify all posts reappear

  **Post Navigation Test**:
  - [ ] Click "Getting Started" post title
  - [ ] Verify URL changes to `?post=getting-started`
  - [ ] Verify post content loads and markdown renders (headings, paragraphs, code blocks)
  - [ ] Verify metadata (date, tags) displays
  - [ ] Click browser back button
  - [ ] Verify returns to homepage with post list

  **Error Handling Test**:
  - [ ] Manually navigate to `?post=nonexistent-post`
  - [ ] Verify error message displays (not blank page)
  - [ ] Open DevTools (F12) → Network tab → Enable "Offline" mode
  - [ ] Reload page
  - [ ] Verify friendly error message (not just console error)

  **Mobile Responsive Test**:
  - [ ] Open DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
  - [ ] Test at 375px width (mobile):
    - Verify content fits without horizontal scroll
    - Verify text is readable
    - Verify buttons/links are tappable (not too small)
  - [ ] Test at 768px width (tablet):
    - Verify layout adapts appropriately
  - [ ] Test at 1024px width (desktop):
    - Verify optimal reading width

  **SEO Verification**:
  - [ ] Right-click page → View Page Source
  - [ ] Verify `<meta name="description">` present
  - [ ] Verify `<meta property="og:title">` present
  - [ ] Verify favicon link present
  - [ ] Inspect post content in Elements tab
  - [ ] Verify `<article>`, `<time>`, `<h1>` tags used

  **GitHub Pages Readiness**:
  - [ ] Check all file paths are relative (not absolute like `/styles/...` but `./styles/...` or `styles/...`)
  - [ ] Verify `.nojekyll` exists
  - [ ] Verify no files requiring build step (no .jsx, .ts, .scss, etc.)
  - [ ] Verify README.md has deployment instructions

  **Final Checklist Review**:
  - [ ] ✅ Pure HTML/CSS/JS (no build tools)
  - [ ] ✅ ES Modules structure
  - [ ] ✅ Markdown → HTML conversion
  - [ ] ✅ Search/filter functionality
  - [ ] ✅ Cyber Blue neobrutalism design
  - [ ] ✅ GitHub Pages compatible
  - [ ] ❌ No build tools
  - [ ] ❌ No frameworks
  - [ ] ❌ No backend/database
  - [ ] ❌ No npm dependencies (only CDN)

  **Evidence Required**:
  - [ ] Screenshot of homepage with 3 posts
  - [ ] Screenshot of search filtering in action
  - [ ] Screenshot of single post view
  - [ ] Screenshot of mobile responsive view (375px)
  - [ ] Screenshot of DevTools Elements showing semantic HTML
  - [ ] Command output of final directory structure:
    ```bash
    ls -R
    ```

  **Commit**: YES
  - Message: `docs: update README with deployment instructions and testing notes`
  - Files: `README.md` (updated)
  - Pre-commit: Full manual test suite completed successfully

---

## Commit Strategy

| After Task | Message | Files | Verification |
|------------|---------|-------|--------------|
| 1 | `chore: initialize project structure with directories and .nojekyll` | `./`, `.nojekyll`, `posts/`, `components/`, `scripts/`, `styles/` | `ls -R` |
| 2 | `style: add neobrutalism CSS with Cyber Blue theme` | `styles/neo-brutalism.css` | Open test HTML, verify button renders |
| 3 | `feat: add blog-header and blog-footer web components` | `components/blog-header.js`, `components/blog-footer.js` | Open test HTML, verify components render |
| 4 | `feat: add router, search, and post-loader modules` | `scripts/router.js`, `scripts/search.js`, `scripts/post-loader.js` | Browser console tests pass |
| 5 | `feat: create main index.html with search and post listing` | `index.html` | Open in browser, verify structure |
| 6 | `content: add posts.json and 3 sample markdown posts` | `posts.json`, `posts/*.md` | Verify posts list populates |
| 7 | `chore: add GitHub Pages config (404, favicon, README)` | `404.html`, `favicon.svg`, `README.md` | Files exist and render correctly |
| 8 | `docs: update README with deployment instructions and testing notes` | `README.md` | Full test suite passes |

---

## Success Criteria

### Verification Commands
```bash
# Start local testing
start index.html  # Windows
open index.html   # Mac

# Verify directory structure
ls -R

# Check file contents
cat posts.json
cat .nojekyll

# After pushing to GitHub
# Visit: https://aibizsolution.github.io/blog
```

### Final Checklist
- [ ] All "Must Have" present: Pure HTML/CSS/JS, ES Modules, Markdown conversion, Search, Neobrutalism design, GitHub Pages ready
- [ ] All "Must NOT Have" absent: No build tools, no frameworks, no backend, no npm dependencies, no extreme brutalism, no full-text search, no extra components, no automated tests
- [ ] All manual tests pass: Homepage loads, search works, tags filter, posts navigate, mobile responsive, SEO tags present
- [ ] GitHub Pages deployment successful: Site accessible at https://aibizsolution.github.io/blog

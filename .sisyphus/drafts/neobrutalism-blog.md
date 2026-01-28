# Draft: Neobrutalism Blog Continuation Plan

## Requirements (confirmed)
- Produce an execution plan to continue neobrutalism static blog work from current repo state.
- Plan should cover remaining tasks: posts.json + sample posts, GitHub Pages config files, integration/verification.
- Base plan on actual repo state, identify missing files, and note any path issues (e.g., absolute fetch paths) with recommended fixes.
- Use Read, Glob, Grep only; do not edit files or run bash.

## Technical Decisions
- None yet.

## Research Findings
- Repo files found: index.html, scripts/post-loader.js, scripts/router.js, scripts/search.js, components/blog-header.js, components/blog-footer.js, styles/neo-brutalism.css, styles/test.css, .nojekyll, existing plan/notepads.
- Missing files noted by user: posts.json, posts/*.md, 404.html, favicon.svg, README.md.
- posts fetch paths are absolute: "/posts.json" and `/posts/${slug}.md` in scripts/post-loader.js.

## Open Questions
- GitHub Pages deployment target and subpath (repo name, base URL).
- Preferred structure/content for sample posts and posts.json schema.
- Whether 404.html and favicon.svg are required in this phase.

## Scope Boundaries
- INCLUDE: plan for remaining tasks (posts.json + posts/*.md, GitHub Pages config, integration/verification, subpath fixes).
- EXCLUDE: any file edits, bash commands, or assumptions about missing files beyond evidence.

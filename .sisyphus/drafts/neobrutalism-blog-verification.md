# Draft: Neobrutalism Blog - Task 8 Verification Plan

## Requirements (confirmed)
- Finish remaining plan items in `.sisyphus/plans/neobrutalism-blog.md` for the neobrutalism static blog.
- Tasks 1-7 are complete; Task 8 (manual verification + any fixes) remains.
- Provide a precise, step-by-step task graph with dependencies and execution plan.
- Include required verification steps and indicate whether to use Playwright for manual checks.
- Constraints: no new frameworks or build tools; use existing HTML/CSS/JS only.
- Must verify: search by title, tag filters, routing to `?post=slug`, markdown rendering, error handling, responsive layout, SEO tags.
- Must not assume without evidence; include how to verify in this environment (Windows, local file).

## Technical Decisions
- Verification approach: Manual/browser-based checks only (per existing plan's test strategy), but evaluate where Playwright can automate checks without adding new tools.

## Research Findings
- Codebase contains `index.html`, `scripts/router.js`, `scripts/search.js`, `scripts/post-loader.js`, `styles/neo-brutalism.css`, `posts.json`, and sample posts; these implement routing/search/markdown rendering.
- Task 8 in `.sisyphus/plans/neobrutalism-blog.md` already lists manual verification steps but needs a precise task graph, dependencies, and execution plan tailored to Windows/local-file context.

## Open Questions
- Should Playwright automation be used for UI verification if available, or stick to manual browser checks only?
- What browser(s) should be considered the primary verification target (Chrome, Edge, Firefox)?
- Is a local static server allowed for verification (e.g., `python -m http.server`) or must checks be via `file://` only?

## Scope Boundaries
- INCLUDE: Task 8 verification steps, explicit success criteria, dependencies, execution waves, and any follow-up fix steps if issues are found.
- EXCLUDE: Implementing code changes, adding tools/frameworks, or modifying project files.

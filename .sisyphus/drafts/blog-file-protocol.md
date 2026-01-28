# Draft: Blog file:// loading issue

## Requirements (confirmed)
- User report: only search input shows, posts list empty.
- Suspected cause: file:// restrictions for ES modules and fetch.
- Goal: ensure blog works from any folder with minimal changes.
- Constraint: must not add build tools.
- Output requested: plan with steps, success criteria, recommended approach (local server vs in-page fallback).

## Technical Decisions
- Pending: choose recommended approach (local server vs in-page fallback) based on codebase patterns and constraints.

## Research Findings
- Pending: codebase patterns for data loading and module usage.
- Pending: external guidance on file:// restrictions for ES modules and fetch.

## Open Questions
- What environments must be supported (Windows/macOS/Linux)?
- Is running a lightweight local server acceptable for end users?
- Is there a preference for in-page fallback when file:// is used?
- Where are posts stored (JSON/markdown/HTML), and must that format remain unchanged?

## Scope Boundaries
- INCLUDE: minimal changes to allow viewing posts when opened from any folder.
- EXCLUDE: adding build tools or bundlers.

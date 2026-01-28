# Neobrutalism Blog

A static blog built with raw HTML, CSS, and JavaScript. Posts are stored as Markdown files and indexed by a simple `posts.json` metadata file.

## Features

- Neobrutalism-inspired UI with bold borders and hard shadows
- Search by title and filter by tag
- Markdown rendering on the client side (marked.js via CDN)
- GitHub Pages-friendly static layout

## Local Preview

Run a local server to avoid CORS issues with `fetch()`:

```bash
npx http-server .
```

Then open the URL shown in the terminal (usually `http://127.0.0.1:8080`).

## GitHub Pages Deployment

Repository: `https://github.com/aibizsolution/blog`

1. Push the repository to GitHub.
2. In the repository settings, open **Pages**.
3. Set **Source** to the `main` branch and root `/`.
4. Save and wait for deployment.

Live URL:

`https://aibizsolution.github.io/blog/`

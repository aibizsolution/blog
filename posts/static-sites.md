# Why Static Sites Still Win

Static sites are fast, portable, and easy to host. You can deploy them to GitHub Pages, CDN hosts, or any static file server without extra infrastructure.

They work well when your content does not need a dynamic backend. Even for blogs, a simple JSON index plus Markdown content can cover most needs.

Benefits you get right away:
- Simple deployment pipeline
- Strong caching and fast load times
- Minimal maintenance overhead

Example fetch pattern:
```js
const response = await fetch('posts.json');
const posts = await response.json();
```

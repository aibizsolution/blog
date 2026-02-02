export async function loadPosts() {
  try {
    const timestamp = new Date().getTime();
    const response = await fetch(`posts.json?t=${timestamp}`);
    if (!response.ok) {
      console.error("Failed to load posts.json", response.status, response.statusText);
      return {
        posts: [],
        error: {
          message: "Failed to load posts metadata.",
          status: response.status,
          statusText: response.statusText,
        },
      };
    }
    return { posts: await response.json(), error: null };
  } catch (error) {
    console.error("Network error while loading posts.json", error);
    return {
      posts: [],
      error: { message: "Network error while loading posts metadata." },
    };
  }
}

export async function loadPost(slug) {
  if (!slug) {
    console.error("Post slug is required");
    return { html: "", error: { message: "Post slug is required." } };
  }

  try {
    const safeSlug = encodeURIComponent(slug);
    const timestamp = new Date().getTime();
    const response = await fetch(`posts/${safeSlug}.md?t=${timestamp}`);
    if (!response.ok) {
      console.error("Failed to load post markdown", response.status, response.statusText);
      return {
        html: "",
        error: {
          message: "Failed to load post content.",
          status: response.status,
          statusText: response.statusText,
        },
      };
    }

    const markdown = await response.text();
    if (typeof marked === "undefined") {
      console.error("marked is not available in the global scope");
      return { html: "", error: { message: "Markdown renderer is unavailable." } };
    }

    let html = marked.parse(markdown, { breaks: true, gfm: true });

    // Custom post-processing to force bold rendering for edge cases (e.g., quotes inside/outside asterisks)
    // Replaces: **"text"** or "**text**" with <strong>"text"</strong>
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    return { html, markdown, error: null };
  } catch (error) {
    console.error("Network error while loading post markdown", error);
    return {
      html: "",
      error: { message: "Network error while loading post content." },
    };
  }
}

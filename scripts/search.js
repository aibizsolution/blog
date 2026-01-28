export function initSearch(posts, query, tag) {
  const safePosts = Array.isArray(posts) ? posts : [];
  const normalizedQuery = (query || "").trim().toLowerCase();
  const normalizedTag = (tag || "").trim().toLowerCase();

  return safePosts.filter((post) => {
    const title = String(post?.title || "").toLowerCase();
    const tags = Array.isArray(post?.tags) ? post.tags : [];
    const normalizedTags = tags.map((item) => String(item || "").toLowerCase());

    const matchesQuery =
      normalizedQuery.length === 0 ||
      title.includes(normalizedQuery) ||
      normalizedTags.some((item) => item.includes(normalizedQuery));
    const matchesTag = normalizedTag.length === 0 || normalizedTags.includes(normalizedTag);

    return matchesQuery && matchesTag;
  });
}

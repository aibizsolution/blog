export function initRouter(callback) {
  if (typeof callback !== "function") {
    throw new TypeError("initRouter expects a callback function");
  }

  let lastSlug = null;

  const getSlugFromPath = () => {
    const match = window.location.pathname.match(/\/posts\/([^/]+)\.html$/);
    if (!match) {
      return null;
    }

    try {
      return decodeURIComponent(match[1]);
    } catch (error) {
      console.error("Failed to decode post slug from path", error);
      return match[1];
    }
  };

  const handleRouteChange = () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("post") || getSlugFromPath();

    // Ignore if slug hasn't changed (e.g. hash change or query param update unrelated to post)
    if (slug === lastSlug) {
      return;
    }

    lastSlug = slug;
    callback(slug && slug.length > 0 ? slug : null);
  };

  window.addEventListener("popstate", handleRouteChange);
  handleRouteChange();

  return () => {
    window.removeEventListener("popstate", handleRouteChange);
  };
}

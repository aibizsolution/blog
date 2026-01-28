export function initRouter(callback) {
  if (typeof callback !== "function") {
    throw new TypeError("initRouter expects a callback function");
  }

  let lastSlug = null;

  const handleRouteChange = () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("post");

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

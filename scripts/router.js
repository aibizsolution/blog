export function initRouter(callback) {
  if (typeof callback !== "function") {
    throw new TypeError("initRouter expects a callback function");
  }

  const handleRouteChange = () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("post");
    callback(slug && slug.length > 0 ? slug : null);
  };

  window.addEventListener("popstate", handleRouteChange);
  handleRouteChange();

  return () => {
    window.removeEventListener("popstate", handleRouteChange);
  };
}

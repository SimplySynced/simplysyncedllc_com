const URL = "https://simplysyncedllc.com";

export default async function sitemap() {
  const routes = [
    "",
    "/about",
    "/contact-us",
    "/managed-services",
    "/home-automation",
    "/home-networking",
    "/pc-building-and-repair",
    "/pc-server-maintenance",
    "/remote-management",
    "/web-presence",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  return [...routes];
}
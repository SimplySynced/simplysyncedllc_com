const URL = "https://simplysyncedllc.com";
 
export default async function sitemap() {
 
  const routes = ["", "/about", "/contact","/home-automation","/home-networking","/pc-building-and-repair","/pc-server-maintenance","/remote-management","/web-presence"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes];
}
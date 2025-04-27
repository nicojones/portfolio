export /* non-const */ enum MyRoutes {
  HOMEPAGE_LINK = "", // same as our homepage

  LINKS = "",
  LINKS_DASHBOARD = "links",
  HOME = "home",
  PROJECTS = "projects",
  ART = "art",
  CONTACT = "contact",
  ABOUT = "about",
  ADMIN = "dashboard",
  BLOG = "blog",
  UPLOAD_IMAGE = "upload-image",
  PAGE_X = "on-running",
  LOGIN = "_login_"
}

export interface MyRoutesFunctions {
  absolute: (key: MyRoutes) => string;
  path: (keys: MyRoutes[], absolute?: string) => string;
}

export const Routes: MyRoutesFunctions = {
  absolute: (key: MyRoutes) => `/${Routes[key]}`,
  path: (keys: MyRoutes[], absolute: string = "/") => absolute + keys.join("/")
};

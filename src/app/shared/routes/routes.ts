export /* non-const */ enum MyRoutes {
  HOMEPAGE_LINK = "", // same as our homepage

  WORK = "projects",
  ART = "art",
  CONTACT = "contact",
  ABOUT = "about",
  HOME = "home",
  LINKS = "",
  READING = "books",
  ADMIN = "dashboard",
  BLOG = "blog",
  UPLOAD_IMAGE = "upload-image",
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

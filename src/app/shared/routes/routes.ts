export interface MyRoutes {
  WORK: string;
  ART: string;
  CONTACT: string;
  ABOUT: string;
  HOME: string;
  READING: string;
  LOGIN: string;
  ADMIN: string;
}

export interface MyRoutesFunctions {
  url: (key: keyof MyRoutes) => string;
  path: (keys: (keyof MyRoutes)[], absolute: string) => string;
}

export const RouteUrls: MyRoutes = {
  WORK: "projects",
  ART: "art",
  CONTACT: "contact",
  ABOUT: "about",
  HOME: "",
  READING: "books",
  ADMIN: "dashboard",
  LOGIN: "_login_"
};

export const Routes: MyRoutes & MyRoutesFunctions = {
  ...RouteUrls,

  url: (key: keyof MyRoutes) => `/${Routes[key]}`,
  path: (keys: Extract<MyRoutes, string>[], absolute: string = "/") => absolute + keys.join("/")
};

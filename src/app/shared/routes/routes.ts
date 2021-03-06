
export interface MyRoutes {
  Projects: string;
  Contact: string;
  About: string;
  Home: string;
  Reading: string;
  Login: string;
  Admin: string;
}

export interface MyRoutesFunctions {
  url: (key: keyof MyRoutes) => string;
  path: (keys: (keyof MyRoutes)[], absolute: string) => string;
}

export const RouteUrls: MyRoutes = {
  Projects: 'projects',
  Contact: 'contact',
  About: 'about',
  Home: '',
  Reading: 'books',
  Admin: 'dashboard',
  Login: '_login_'
};

export const Routes: MyRoutes & MyRoutesFunctions = {
  ...RouteUrls,

  url: (key: keyof MyRoutes) => {
    return `/${ Routes[key] }`;
  },
  path: (keys: Extract<MyRoutes, string>[], absolute: string = '/') => {
    return absolute + keys.join('/');
  }
};

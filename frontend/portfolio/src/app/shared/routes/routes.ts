
export interface MyRoutes {
  Work: string;
  Contact: string;
  About: string;
  Home: string;
  Reading: string;
  Login: string;
  Admin: string;
  Read: string;
}

export interface MyRoutesFunctions {
  absolute: (key: keyof MyRoutes) => string;
  path: (keys: (keyof MyRoutes)[], absolute: string) => string;
}

export const RouteUrls: MyRoutes = {
  Work: 'work',
  Contact: 'contact',
  About: 'about',
  Home: '',
  Reading: 'books-reading',
  Read: 'books-read',
  Admin: 'dashboard',
  Login: '_login_'
};

export const Routes: MyRoutes & MyRoutesFunctions = {
  ...RouteUrls,

  absolute: (key: keyof MyRoutes) => {
    return `/${ Routes[key] }`;
  },
  path: (keys: Extract<MyRoutes, string>[], absolute: string = '/') => {
    return absolute + keys.join('/');
  }
};

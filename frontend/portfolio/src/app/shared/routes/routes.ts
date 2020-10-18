interface MyRoutes {
  absolute: (key: keyof MyRoutes) => string;
  path: (keys: (keyof MyRoutes)[], absolute: string) => string;
  Work: string;
  ContactMe: string;
  About: string;
  Home: string;
  Goodreads: string;
}

export const Routes: MyRoutes = {
  Work: 'work',
  ContactMe: 'contact',
  About: 'about',
  Home: '',
  Goodreads: 'goodreads',

  absolute: (key: keyof MyRoutes) => {
    return `/${ Routes[key] }`;
  },
  path: (keys: Extract<MyRoutes, string>[], absolute: string = '/') => {
    return absolute + keys.join('/');
  }
};

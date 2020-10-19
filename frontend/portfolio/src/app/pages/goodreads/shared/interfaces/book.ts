export interface Book {
  title: string;
  pages: string;
  descr: string;
  link: string;
  image: string;
}

export type Books = Book[];

export interface ReadBooks {
  totalRead: number;
  read: Books;
  page: number;
}

export interface Shelf extends ReadBooks {
  reading: Books;
}


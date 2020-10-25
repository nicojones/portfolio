export interface Book {
  title: string;
  pages: string;
  descr: string;
  link: string;
  image: string;
}

interface UpdatedJSON {
  _last_update?: string;
  _updated?: boolean;
}

export type Books = Book[];

export interface ReadBooks extends UpdatedJSON {
  totalRead: number;
  books: Books;
  _info?: string;
}

export interface ReadingBooks extends UpdatedJSON {
  books: Books;
  reading: number;
}

export interface Shelf {
  reading: ReadingBooks;
  read: ReadBooks;
}


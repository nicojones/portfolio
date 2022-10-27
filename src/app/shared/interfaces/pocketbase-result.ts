export interface PocketbaseResult<T = any> {
  items: PocketbaseItem<T>[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export interface PocketbaseExtra<T = any> {
  "@collectionId": string;
  "@collectionName": string;
  "@expand": Partial<T>;
}

export type PocketbaseItem<T = any> = T & PocketbaseExtra<T>;

export type PocketbaseDataItem<T = any> = { data: T } & PocketbaseExtra<T>;

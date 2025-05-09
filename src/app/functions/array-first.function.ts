type ArrayType<T> = T extends (infer Item)[] ? Item : T

export const arrayFirst = <T = any>(list: (ArrayType<T>)[] | undefined | null): ArrayType<T> | null =>
  list?.length > 0 ? list[0] : null;

/**
 * For Frozen javascript objects that are immutable, we return an editable copy.
 * @param object
 */
export function clone<T> (object: T): T {
  return JSON.parse(JSON.stringify(object || null)) as T;
}

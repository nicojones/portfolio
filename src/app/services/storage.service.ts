import { StorageKey } from '~app/shared/enums';


interface UniversalStorage {
  getSize (): number;

  setItem<T> (key: StorageKey, value: T): void;

  getItem<T> (key: StorageKey): T;

  removeItem (key: StorageKey): void;

  removeItems (keys: StorageKey[]): void;

  clear (): void;

  has (key: StorageKey): boolean;
}

abstract class StorageService {
  /**
   * Cache the reference
   */
  private static localStorage = window.localStorage;

  private static storageFactory: UniversalStorage;

  public static getLocalStorage (): UniversalStorage {
    return this.storageFactory || this.createStorageFactory(this.localStorage);
  }

  private static createStorageFactory (storage: Storage): UniversalStorage {
    this.storageFactory = {
      getSize: () => this.getSize(storage),
      setItem: <T> (key: string, value: T) => this.setItem(storage, key, value),
      getItem: <T> (key: string) => this.getItem<T>(storage, key),
      removeItem: (key: string) => this.removeItem(storage, key),
      removeItems: (keys: string[]) => this.removeItems(storage, keys),
      clear: () => this.clear(storage),
      has: (key: string) => this.has(storage, key)
    };

    return this.storageFactory;
  }

  private static getSize (storage: Storage): number {
    return storage.length;
  }

  /**
   * @param storage: Storage
   * @param key - Key to store under
   * @param value - Value to stringify
   */
  private static setItem<T> (storage: Storage, key: string, value: T): void {
    storage.setItem(StorageKey.Prefix + key, JSON.stringify(value));
  }

  /**
   * @param storage: Storage
   * @param key - Key to get
   * @returns - Parsed object or number or a plain string
   */
  private static getItem<T> (storage: Storage, key: string): T {
    const unparsed = storage.getItem(StorageKey.Prefix + key)!;

    try {
      return JSON.parse(unparsed);
    } catch {
      return (unparsed as unknown) as T;
    }
  }

  /**
   * @param storage: Storage
   * @param key - Key to remove
   */
  private static removeItem (storage: Storage, key: string): void {
    storage.removeItem(StorageKey.Prefix + key);
  }

  /**
   * @param storage: Storage
   * @param keys - Multiple keys provided to remove
   */
  private static removeItems (storage: Storage, keys: string[]): void {
    for (let i = 0, length = keys.length; i < length; i++) {
      storage.removeItem(StorageKey.Prefix + keys[i]);
    }
  }

  /**
   * Empty the list
   */
  private static clear (storage: Storage): void {
    storage.clear();
  }

  /**
   * @param storage
   * @param key - Key to check
   * @returns - True if the storage has such key
   */
  private static has (storage: Storage, key: string): boolean {
    return storage.hasOwnProperty(StorageKey.Prefix + key);
  }
}

/**
 * Shortcut to the local storage factory
 */
export function getLocalStorage () {
  return StorageService.getLocalStorage();
}

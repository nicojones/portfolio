/**
 * given an interface {@code Foo{ id: number; name: string; }}, {@see AnyObject} creates a type that only accepts
 * existing keys in the interface as keys for the Object.
 * @example {@code {id: 'hello', name: 3} as AnyObject<Foo>} is OK, because the keys are the same
 * @example {@code {id: 'hello'} as AnyObject<Foo>} is OK, because the key exists and it's a partial of Foo
 * @example {@code {id: 'hello', value: 123} as AnyObject<Foo>} is FALSE, because the key `value` doesn't exist in Foo
 */
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MainFormArray, MainFormGroup} from "~app/shared/classes";


export type AnyObject<T, U = any> = { [K in keyof Partial<T>]: U; };

/**
 * An {@see AnyObject} for Forms only.
 */
export type FormObject<T> = AnyObject<T,
  UntypedFormArray | UntypedFormGroup | UntypedFormControl | MainFormGroup<T> | MainFormArray<T[]>>;

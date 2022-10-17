import {AbstractControl, AbstractControlOptions, AsyncValidatorFn, UntypedFormGroup, ValidatorFn} from '@angular/forms';
import {FormObject} from '~app/shared/interfaces';


// @ts-ignore
export class MainFormGroup<Type = any> extends UntypedFormGroup {
  public initialValue: Type;

  public readonly value: Type;

  constructor(
    controls: FormObject<Type>,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {

    // Call the parent constructor
    super(controls as { [key: string]: AbstractControl }, validatorOrOpts, asyncValidator);

    this.initialValue = this.getRawValue() as Type;
  }

  public reset = (value?: any, options?: {
    onlySelf?: boolean;
    emitEvent?: boolean;
  }): void => super.reset(value || this.initialValue, options);

  /**
   * Either the {@see get} has only one key (and it's a key of the interface) or it has
   * multiple keys, in which case only the first one is a key of {@see T} and the others
   * are not (as they are `sub-classes` of T)
   * @param path
   */
  // @ts-ignore
  public get(path: keyof Type | PathsToProps<Type>): AbstractControl {
    return super.get(path as string | (string | number)[]);
  }


  // @ts-ignore
  public addControl(name: keyof Type, control: AbstractControl): void {
    super.addControl(name as unknown as string, control);
  }

  public getRawValue(): Type {
    return super.getRawValue() as Type;
  }
}

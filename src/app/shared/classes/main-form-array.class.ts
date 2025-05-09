import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  UntypedFormArray,
  UntypedFormControl,
  ValidatorFn
} from "@angular/forms";
import {MainFormGroup} from "~app/shared/classes/main-form-group.class";
import {FormObject} from "~app/shared/interfaces";


export class MainFormArray<T extends Array<any>> extends UntypedFormArray {
  public initialValue: T;

  public value: T;

  constructor(
    controls: UntypedFormControl[] | MainFormGroup[],
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(controls as AbstractControl[], validatorOrOpts, asyncValidator);

    this.initialValue = this.getRawValue() as T;
  }

  /**
   * Extend FormArray reset behavior by removing manually added items to the array.
   * For this action the id is checked.
   *
   * @param value
   * @param options
   */
  public reset = (
    value?: any,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
    }
  ): void => {
    /**
     * Remove newly added FormGroups
     */
    for (let i = this.length - 1; i >= 0; i--) {
      if (!this.isDefaultValue(this.at(i) as MainFormGroup)) {
        this.removeAt(i);
      }
    }

    /**
     * Add default deleted FormGroups
     */
    this.initialValue.forEach((defaultFormValue) => {
      if (!this.findControlById(defaultFormValue.id)) {
        this.push(this.rebuildFormGroup(defaultFormValue) as AbstractControl);
      }
    });

    /**
     * Restart FormControls values
     */
    super.reset(value || this.initialValue, options);
  };

  /**
   * @param defaultValue
   */
  public setDefaultValue (defaultValue: T): void {
    this.initialValue = defaultValue;
  }

  private isDefaultValue (formGroup: MainFormGroup): boolean {
    for (let i = 0; i < this.initialValue.length; i++) {
      const itemId = formGroup.value.id;
      if (itemId && this.initialValue[i].id && itemId === this.initialValue[i].id) {
        return true;
      }
    }

    return false;
  }

  private rebuildFormGroup (defaultFormValue): MainFormGroup<T> {
    const formControls: FormObject<T> = {} as FormObject<T>;
    Object.keys(defaultFormValue).forEach((key: string) => {
      formControls[key] = new UntypedFormControl(defaultFormValue[key]);
    });

    return new MainFormGroup<T>(formControls);
  }

  private findControlById (id: number): AbstractControl {
    return this.controls.find((abstractControl: AbstractControl) => id === abstractControl.value.id);
  }
}

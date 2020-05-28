import { ValidatorFn, AbstractControl } from '@angular/forms';


export function isNotNull(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    console.log(control.value);
    return (control.value) && control.value === null ? { 'isNotNull': {value: control.value} } : null;
  };
}
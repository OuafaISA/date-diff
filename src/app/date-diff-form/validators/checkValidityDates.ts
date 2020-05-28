import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

/** firstDate > secondDate */
export const checkValidityDates: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const firstDate = control.get('firstDate');
  const secondDate = control.get('secondDate');

  console.log(firstDate.value, secondDate.value);
  return (firstDate && secondDate) && secondDate.value <= firstDate.value ? { 'checkValidityDates': true } : null;
};

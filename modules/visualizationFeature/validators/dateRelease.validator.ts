import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dateValidator(
  control: AbstractControl
): ValidationErrors | null {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  const selectedDate = new Date(control.value);
  const isDateValid = selectedDate > currentDate;
  return isDateValid ? null : { invalidDate: control.value };
}

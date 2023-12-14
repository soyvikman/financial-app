import { AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

export function dateRevisionValidator(
  control: AbstractControl
): ValidationErrors | null {
  const revisionDate = new Date(control.value);
  const releaseDate = new Date(control.parent?.value.date_release);
  const year = releaseDate.getFullYear();
  const month = releaseDate.getMonth();
  const day = releaseDate.getDate();
  const releaseDatePlusAYear = new Date(year + 1, month, day);

  const isDateValid = revisionDate > releaseDatePlusAYear;
  return isDateValid ? null : { invalidDate: control.value };
}

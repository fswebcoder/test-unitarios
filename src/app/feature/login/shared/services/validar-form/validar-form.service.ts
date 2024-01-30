import { Injectable } from "@angular/core";
import { FormGroup, FormArray, FormControl } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidateFormService {
  public validarFormGroup(formGroup: FormGroup) {
    Object?.keys(formGroup?.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormArray) {
        for (const control1 of control.controls) {
          if (control1 instanceof FormControl) {
            this.validarFormControl(control1);
          }
          if (control1 instanceof FormGroup) {
            this.validarFormGroup(control1);
          }
        }
        this.validarFormControl(control);
      }
      if (control instanceof FormControl) {
        this.validarFormControl(control);
      } else if (control instanceof FormGroup) {
        this.validarFormGroup(control);
      }
    });
  }

  public validarFormControl(control: FormControl | FormArray) {
    control.markAsDirty();
    control.markAsTouched();
    // El emitEvent en false lo que evita es que si tenemos valueChanges de algún control
    // o del formulario en si, al validar con esta función no se emita algún cambio y se
    // propague un evento que no queremos
    control.updateValueAndValidity({ emitEvent: false });
  }
}

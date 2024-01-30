import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { ValidateFormService } from '../shared/services/validar-form/validar-form.service';
import { LoginService } from '../shared';
import { ILoginRequest } from '../shared/interfaces/login.interface';
import { LoginRequest } from '../shared/models/login.model';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, ILoginRequest{

  form: FormGroup
  constructor(
    private readonly router: Router,
    private fb:FormBuilder,
    private validateFormService:ValidateFormService,
    private loginService:LoginService,
    private spinner: NgxSpinnerService
  ) {
    this.initForm();
  }


  email: string;
  password: string;
   ngOnInit(): void {
  }

  initForm(){
    this.form = this.fb.group({
      inputEmail: ['eve.holt@reqres.in',[Validators.required], this.minLengthValidator(8)],
      inputPassword: ['cityslicka',[Validators.required, Validators.minLength(8)]]
    })
  }

  private minLengthValidator(minLength: number): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return control.value && control.value.length < minLength
        ? of({ minlength: true })
        : of(null);
    };
  }

  validarFormulario(){
    this.validateFormService.validarFormGroup(this.form);
    console.log(this.form?.valid);

    if (this.form?.valid) {
      this.login();
    }
  }

  async login(){
    this.spinner.show();
    const {token}  = await this.loginService.login(this.paramsByLogin())
    localStorage.setItem('token', token)
    this.spinner.hide();
    this.redirectUsers();
  }

  paramsByLogin(): LoginRequest {
   let params :LoginRequest =  new LoginRequest()
   params.email = this.inputEmail.value
   params.password = this.inputPassword.value
   return params;
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }



  get inputEmail(){
    return this.form.get('inputEmail')
  }

  get inputPassword(){
    return this.form.get('inputPassword')
  }
}

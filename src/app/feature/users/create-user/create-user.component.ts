import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateFormService } from '@feature/login/shared/services/validar-form/validar-form.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateUsersDTO } from './shared/models/create-model';
import { UsersService } from './shared/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {

  form: FormGroup

  constructor(
    private readonly router: Router,
    private fb: FormBuilder,
    private validateFormService:ValidateFormService,
    private spinner: NgxSpinnerService,
    private usersService:UsersService
  ) {
  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      job: [null, [Validators.required]]
    })
    this.form.markAllAsTouched();
  }

  validateForm(){
    this.validateFormService.validarFormGroup(this.form);
    if(this.form.valid){
      this.createUser()
    }
  }


  async createUser(){
    this.spinner.show()
    let response = await this.usersService.createUser(this.paramByCreate())
    if(response){
      alert(`El usuario ${this.paramByCreate().name} fue creado con éxito`);
    }
    this.spinner.hide()
    this.redirectToListUsers()
  }

  paramByCreate(): CreateUsersDTO{
    let param  = new CreateUsersDTO()
    param.name = this.name.value
    param .job = this.job.value
    return param
  }

  get name(){
    return this.form.get('name')
  }

  get job(){
    return this.form.get('job')
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}

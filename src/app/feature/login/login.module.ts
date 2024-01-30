import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidateFormService } from './shared/services/validar-form/validar-form.service';
import { LoginService } from './shared';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, HttpClientModule,  LoginRoutingModule, FormsModule, ReactiveFormsModule],
  providers:[ValidateFormService, LoginService]
})
export class LoginModule {}

import { NgModule } from '@angular/core';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersRoutingModule } from './users-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './create-user/shared/services/users/users.service';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations:[ListUsersComponent, HomeUserComponent, NavBarComponent, FilterUserByNamePipe, CreateUserComponent],
  imports:[CommonModule,UsersRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
],
  exports:[NavBarComponent],
  providers:[UsersService]
})
export class UsersModule {
}

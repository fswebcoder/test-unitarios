import { Component, OnInit } from '@angular/core';
import { IListUsers } from '../shared/interfaces/list-users.interface';
import { UsersService } from '../create-user/shared/services/users/users.service';


@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  listusers: IListUsers[]
  currentPage: number = 1;
  itemsPerPage: number = 10;
  searchTerm: string = '';
  constructor(private usersService:UsersService){
  }
  ngOnInit(){
      this.getUsers();
  }

  async getUsers(){
    let data = await this.usersService.getUsers()
    this.listusers = data.data
  }

  deleteUserForIndex(item: IListUsers){
    this.usersService.deleteUserForIndex(item.id);
    const idToDelete = item.id
    const updatedItems = this.listusers.filter(item => item.id !== idToDelete);
    this.listusers = [...updatedItems]
    alert(`El usuario ${item.first_name} fue eliminado con éxito`);
  }



}

import { Component, OnInit } from '@angular/core';
//import userservice
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
	users;
//inject the userservice in the constructor
  constructor(private userService: UserService) { }

  ngOnInit() {

  	 this.users = this.userService.getUsers();
  }

}

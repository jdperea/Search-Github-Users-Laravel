import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any;
  constructor(private userservice: UsersService, private router: Router) {}
  ngOnInit() {
    // using | async (pipe) this will unsubscribe
    // unwrap the observable
    this.users = this.userservice.getAllUsers();
  }
}

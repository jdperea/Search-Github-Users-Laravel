import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  user: any;
  users: any;
  constructor(
    private userservice: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //get username out of the url & set var
    this.route.params.subscribe((params) => {
      const username = params['username'];

      //use the userservice to get data from api
      let data = Array();
      this.userservice.getFilteredUser(username).subscribe((user) => {
        console.log(typeof user);
        //bind that to a user var
        
        data.push(user);
        //this.user = user;
      });
      this.users = data;
    });
  }
}

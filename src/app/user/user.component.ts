import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user;
  constructor(
    private userservice: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //get username out of the url & set var
    this.route.params.subscribe((params) => {
      const username = params['username'];

      //use the userservice to get data from api
      this.userservice.getSingleUser(username).subscribe((user) => {
        console.log(user);
        //bind that to a user var
        this.user = user;
      });
    });
  }
}

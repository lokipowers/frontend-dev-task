import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  add(name: string): void {
    name = name.trim();
    if (!name){ return; }
    this.userService.addUser({ firstName: name } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user.id).subscribe();
  }

}

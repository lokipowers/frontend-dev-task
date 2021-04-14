import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserNo404(id)
        .subscribe(user => {
          this.user = user;
        });
    }
  }

  addUser(user: User): void {
    this.userService.addUser(user as User)
      .subscribe( user => {
        // Add some kind of nice message.
        console.log('Added User', user);
      });
  }

  updateUser(user: User): void {

  }

}

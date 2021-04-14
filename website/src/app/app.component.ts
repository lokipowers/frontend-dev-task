import {Component, OnInit} from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/User';
import {HttpClient, HttpHandler} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private rs: UserService) { }

  columns = ['First Name', 'Last Name', 'Date of Birth', 'Gender'];
  index = ['firstName', 'lastName', 'birthDate', 'gender'];

  users: User[] = [];

  ngOnInit(): void {
    // this.rs.getUsers().subscribe(
    //   (response) =>
    //   {
    //     this.users = response;
    //   },
    //   (error) => console.log(error)
    // );
  }
}

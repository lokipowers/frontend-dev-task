import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users, User} from '../models/user';

@Injectable()



export class UserService {

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users');
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/users/${userId}`);
  }

}

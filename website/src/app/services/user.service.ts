import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../models/User';
import { MessageService } from './message.service';
import {ApiListingResponse} from "../models/ApiResponses";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private usersUrl = `${environment.api.users.baseUrl}/users`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /**
   * Get Users
   * @returns Observable<User[]>
   */
  getUsers(
    page: number = 1,
    perPage: number = 20
  ): Observable<User[]>{
    return this.http.get<ApiListingResponse>(this.usersUrl)
    .pipe(
      map(users => users.items),
      tap(_ => this.log('GET USERS')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  /**
   * Get User or return 404
   * @param id
   */
  getUserNo404<Data>(id: number | string): Observable<User> {
    const url = this.usersUrl + '/' + id;
    return this.http.get<User>(url)
      .pipe(
        map(user => user),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} user id=${id}`);
        }),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }

  /**
   * Search Users using term
   * @param term
   */
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()){
      // If search term is empty, return empty User array.
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersUrl}/?name=${term}`)
      .pipe(
        tap(x => x.length ?
          this.log(`found users matching "${term}"`) :
          this.log(`no users matching "${term}"`)
        ),
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }

  /**
   * Add User
   * @param user
   */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions)
      .pipe(
        tap((newUser: User) => this.log(`added user id=${newUser.id}`)),
        catchError(this.handleError<User>('addUser'))
      );
  }

  /**
   * Delete User
   * @param id
   */
  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted user id=${id}`)),
        catchError(this.handleError<User>('deleteUser'))
      );
  }

  /**
   * Update User
   * @param user
   */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated user id=${user.id}`)),
        catchError(this.handleError<any>('updateUser'))
      );
  }

  /**
   * Handle Http operation errors
   * Let the app continue.
   * @param operation
   * @param result
   * @private
   */
  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  /**
   * Log a UserService message with the MessageService
   * @param message
   * @private
   */
  private log(message: string): void {
    this.messageService.add(`UserService: ${message}`);
  }

}

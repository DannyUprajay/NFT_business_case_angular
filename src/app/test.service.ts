import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Address, Test} from "./test";
import {Observable} from "rxjs";
import {result, UserInterface} from "./user.interface";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }


  getAllUser(): Observable<UserInterface[]>{
    return this.http.get<UserInterface[] >("https://127.0.0.1:8002/user/");
  }

getUserById(id: number): Observable<UserInterface>{
  return this.http.get<UserInterface>('https://127.0.0.1:8002/user/' + id);
}

  addUser(user: UserInterface): Observable<result> {
    const body = JSON.stringify(user);
    const header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.post<result>("https://127.0.0.1:8002/user/new", body, {'headers': header})

  }

  deleteUser(id: number): Observable<result>{
    return this.http.delete<result>('https://127.0.0.1:8002/user/' + id);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Address, Test} from "./test";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }


  getPokemon(): Observable<Test[]>{
    return this.http.get<Test[] >("https://127.0.0.1:8002/user/");
  }

getUserById(id: number): Observable<Test>{
  return this.http.get<Test>('https://127.0.0.1:8002/user/' + id);
}

}

import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http';
//import{HttpClient,HttpHeaders} from '@angular/common/http';
import {HttpClientModule,HttpClient,HttpHeaders} from '@angular/common/http';
import {UserTable} from 'src/app/Model/UserTable';
//import {UserService} from 'src/app/services/user.service'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
baseURL:string="http://localhost:3000/users";
  constructor(private _http:HttpClient) { }
  getAllUsers()
{
  return this._http.get<UserTable[]>(this.baseURL);
}
addUser(user:UserTable)
{
  return this._http.post<UserTable>(this.baseURL,JSON.stringify(user),this.httpOptions);
}
deleteUser(id)
{
  return this._http.delete<UserTable>(this.baseURL+"\\"+id,this.httpOptions);
}
}

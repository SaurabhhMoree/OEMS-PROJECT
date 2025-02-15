import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  settoken(token: any) {
  }



  constructor(private http: HttpClient) { }

  public loginStatusSubject = new Subject<Boolean>();

  // for genratetoken
  public genrateToken(data: any) {
    return this.http.post(`${baseUrl}generate-token`, data)
  }

  // login user can set token in localstorage
  public loginUser(token: any) {
    return localStorage.setItem('token', token)
  }


  // check if user is log in or out
  public isloggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == null || tokenStr == '' || tokenStr == undefined) {

      return false;
    }

    else {
      return true
    }
    
  }

  //get token to use multiple times whenever we want 

  public setTokan(){
    return localStorage.getItem('token')
  }

  // show currret user details 
  public getCurrentUser(){
    return this.http.get(`${baseUrl}current-user`)
  }

  // 

  // string data convert json to string from user

  public setUser(user:any){
    return localStorage.setItem('user',JSON.stringify(user))
  }

  // clear token and user data
  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    return true;
    
  }

  // user data is not null then it will convert json format logout
  getUser(){
      let userStr = localStorage.getItem('user');
      console.log(userStr);
      if(userStr!=null){
        return JSON.parse(userStr)
        
      }
      else{
        this.logOut;
        return null;
      }

  }

  // check user role admin or normal user 
  public getUserRole(){
    let user = this.getUser();
    console.log(user)
    return user.authorities[0].authority;

  }

  public saveuser(data:any){
    return this.http.post(`${baseUrl}user/`, data)
  }
}


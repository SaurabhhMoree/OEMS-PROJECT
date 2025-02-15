import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/loginservice/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = true;
  User: any = null;

  constructor(private loginservice: LoginService, private router: Router) { }


  ngOnInit(): void {

    this.isLoggedIn = this.loginservice.isloggedIn();
    this.User = this.loginservice.getUser()
    this.loginservice.loginStatusSubject.asObservable().subscribe(
      (res) => {
        this.isLoggedIn = this.loginservice.isloggedIn()
        this.User = this.loginservice.getUser()
      })

  }

  logout() {
    this.loginservice.logOut();
    this.loginservice.loginStatusSubject.next(false)
    this.router.navigate(['login'])
  }
}

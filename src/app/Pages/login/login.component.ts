import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/loginservice/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])

  })

  constructor(private loginService: LoginService, private route: Router) { }

  SubmitLoginData() {
    console.log(this.loginform.value)

    // genrate tokan
    this.loginService.genrateToken(this.loginform.value).subscribe(
      (res: any) => {
        console.log(res)



        // serTokan is used to set token in localstorage
        this.loginService.settoken(res.token)


        this.loginService.loginUser(res.token)
        this.loginService.getCurrentUser().subscribe(
          (res) => {
            console.log(res)
            this.loginService.setUser(res)
            if (this.loginService.getUserRole() == "ADMIN") {
              this.route.navigate(['admin-dash'])
              this.loginService.loginStatusSubject.next(true)
            }
            else if (this.loginService.getUserRole() == "NORMAL") {
              this.route.navigate(['user-dash']);
              this.loginService.loginStatusSubject.next(true);

            }
          }
        )
      },
      (err)=>{
        Swal.fire({
          title:'User Not Found',
          text:'Invaild User',
          icon:'error',
        })
      }
      )
  }
}

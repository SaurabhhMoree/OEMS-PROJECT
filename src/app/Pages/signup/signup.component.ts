import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/loginservice/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private loginservice: LoginService, private router: Router) { }

  signupform: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),

  })

  Signup() {
    console.log(this.signupform.value);
    this.loginservice.saveuser(this.signupform.value).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire({
          title: `${res.username}`,
          text: 'User Sucessfully Added',
          icon: 'success'
        })
        this.router.navigate(['login'])


      })

  }
}


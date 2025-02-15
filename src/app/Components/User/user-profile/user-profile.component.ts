import { Component , OnInit} from '@angular/core';
import { LoginService } from 'src/app/Services/loginservice/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent  implements OnInit {
  

  userData:any;

  constructor(private loginservice:LoginService){}
  ngOnInit(): void {
    this.userData = this.loginservice.getUser();
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/loginservice/login.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  AdminData:any;

  constructor(private loginservice:LoginService){}
  ngOnInit(): void {
    
    this.AdminData = this.loginservice.getUser()
  }

}

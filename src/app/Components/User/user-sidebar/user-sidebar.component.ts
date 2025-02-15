import { Component , OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/Category-service/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  AllCategory:any;

  constructor(private categoryservice:CategoryService){}


  ngOnInit(): void {
    this.categoryservice.getAllCategory().subscribe(
      (res:any) =>{
        console.log(res);
        this.AllCategory = res;
      }
    )
  }

}

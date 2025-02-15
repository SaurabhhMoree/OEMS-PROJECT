import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(private category:CategoryService , private route : Router){}

  addcategoryform: FormGroup = new FormGroup({

    title: new FormControl(null, Validators.required),
    description:new FormControl(null,Validators.required)

  })

  addcategory(){
    console.log(this.addcategoryform.value);
    this.category.addCategory(this.addcategoryform.value).subscribe(
      (res:any)=>{
        console.log(res);
        Swal.fire({
          title: `${res.title}`,
          text:'Category Added Sucessfully',
          icon:'success'
        })
        this.route.navigate(['admin-dash/all-cat'])
        
      })
  }


}

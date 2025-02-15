import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {

  category_id: any;

  constructor(private category: CategoryService, private activatedroute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      (res: any) => {
        console.log(res.id);
        this.category_id = res.id;

      });
    this.category.getCategoryById(this.category_id).subscribe(
      (res: any) => {
        console.log(res);
        this.updatecategoryform.setValue(res);


      }
    )
  }

  updatecategoryform: FormGroup = new FormGroup({

    category_id: new FormControl(),
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required)

  })

  updatecat() {
    console.log(this.updatecategoryform.value);
    this.category.updatecategory(this.updatecategoryform.value).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire({
          title: `${res.title}`,
          text: 'Category Updated SucessFully',
          icon: 'success'
        })
        this.router.navigate(['admin-dash/all-cat'])

      })
  }


}

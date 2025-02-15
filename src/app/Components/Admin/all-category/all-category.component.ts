import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {

  constructor(private category: CategoryService, private router: Router) { }

  categoryData: any;

  ngOnInit(): void {
    this.getAllCategoryData()
  }

  getAllCategoryData() {
    this.category.getAllCategory().subscribe(
      (res) => {
        console.log(res);
        this.categoryData = res;

      })
  }

  deleteCategoryData(category_id: any) {


    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {

        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger mx-5'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "Do You Want Delete This Category",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No, cancel!',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

    this.category.DeleteCategoryById(category_id).subscribe(
      (res) => {
        console.log(res);

      })
  }

}

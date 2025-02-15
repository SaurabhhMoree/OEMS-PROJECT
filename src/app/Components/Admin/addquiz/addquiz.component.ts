import { Component , OnInit} from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category-service/category.service';
import { QuizService } from 'src/app/Services/Quiz-Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent implements OnInit {

  constructor(private quizservice:QuizService , private categoryservice:CategoryService, private router:Router){}
  
  addquizform: FormGroup = new FormGroup({

    title: new FormControl(null, Validators.required),
    description:new FormControl(null,Validators.required),
    maxMarks:new FormControl(null,Validators.required),
    numberOfQuestions:new FormControl(null,Validators.required),
    active:new FormControl(null,Validators.required),
    category_id:new FormControl(null,Validators.required),


  })

  getcategoryData:any;

  ngOnInit(): void {
     this.categoryservice.getAllCategory().subscribe(
      (res:any) =>{
        console.log(res);
        this.getcategoryData = res;
      }
     )
  }


  addQuiz(){

    if(this.addquizform.invalid){
      Swal.fire({
        title:'Error',
        text:'All fields are required. Please fill out all fields',
        icon:'error'
      })
    }

    console.log(this.addquizform.value);

    let addQuizesData = {
      "title": this.addquizform.value.title,
      "description": this.addquizform.value.description,
      "maxMarks": this.addquizform.value.maxMarks,
      "numberOfQuestions":this.addquizform.value.numberOfQuestions,
      "active": this.addquizform.value.active,
      "category" : {"category_id" : this.addquizform.value.category_id}
    }

    this.quizservice.addQuizes(addQuizesData).subscribe(
      (res:any) => {
        console.log(res);
        Swal.fire({
          title: `${res.title}`,
          text:'Quiz Added',
          icon:'success'
        })
        this.router.navigate(['admin-dash/all-quiz'])
      }
    )

  }
}
  


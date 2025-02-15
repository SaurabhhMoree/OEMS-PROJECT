import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category-service/category.service';
import { QuizService } from 'src/app/Services/Quiz-Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {



  quizId: any;
  getQuiz: any;
  getAllCategory: any

  constructor(private quizservice: QuizService, private categoryservice: CategoryService, private activatedRoute: ActivatedRoute, private route: Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (res: any) => {
        console.log(res.id);
        this.quizId = res.id
      }
    );


    this.quizservice.getQuizDataByid(this.quizId).subscribe(
      (res: any) => {
        console.log(res);
        this.getQuiz = res;
      }
    );


    this.categoryservice.getAllCategory().subscribe(
      (res: any) => {
        console.log(res);
        this.getAllCategory = res;
      }
    )
  }

  UpdatequizForm: FormGroup = new FormGroup({

    quiz_id: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    maxMarks: new FormControl(null, Validators.required),
    numberOfQuestions: new FormControl(null, Validators.required),
    active: new FormControl(null, Validators.required),
    category_id: new FormControl(null, Validators.required),


  })

  UpdateFormData() {
    console.log(this.UpdatequizForm.value);


    let SetUpateData = {

      "quiz_id": this.quizId,
      "title": this.UpdatequizForm.value.title,
      "description": this.UpdatequizForm.value.description,
      " maxMarks": this.UpdatequizForm.value.maxMarks,
      "numberOfQuestions": this.UpdatequizForm.value.numberOfQuestions,
      "active": this.UpdatequizForm.value.active,
      "Category": { "category_id": this.UpdatequizForm.value.category_id }

    }

    this.quizservice.updateQuiz(SetUpateData).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire({
          title: `${res.title}`,
          text: 'Update Quiz Sucessfully',
          icon:'success'
        })
        this.route.navigate(['admin-dash/all-quiz'])
      }
    )
  }
}

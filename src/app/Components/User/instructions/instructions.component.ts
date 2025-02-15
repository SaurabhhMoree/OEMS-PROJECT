import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/Services/Quiz-Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  quizId: any;
  quizes: any;

  constructor(private quizservice: QuizService, private activatedroute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      (res: any) => {
        console.log(res.quiz_id);
        this.quizId = res.quiz_id;
      }
    )

    this.quizservice.getQuizDataByid(this.quizId).subscribe(
      (res: any) => {
        console.log(res);
        this.quizes = res;
      }
    )

  }

  startexam(){
    Swal.fire({
      title: 'Start Exam?',
      text: "Are You sure want to start exam!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Start Exam'
    }).then((result) => {
      if (result.isConfirmed) {
       this.router.navigate([`StartExam/${this.quizId}`])
        
      }
    })
  }

}

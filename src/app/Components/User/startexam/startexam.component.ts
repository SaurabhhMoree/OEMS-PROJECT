import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/Question-service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-startexam',
  templateUrl: './startexam.component.html',
  styleUrls: ['./startexam.component.css']
})
export class StartexamComponent implements OnInit {


  quizId: any;

  questions: any;

  timer: any;

  marksGot: any;

  correctAnswers: any;

  attempted: any;

  isSubmit: Boolean = false;


  constructor(private questionservice: QuestionService, private activatedroute: ActivatedRoute , private router:Router) { }


  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      (res: any) => {
        console.log(res.quiz_id);
        this.quizId = res.quiz_id;
      }
    );

    this.questionservice.getQuestionByQuizId(this.quizId).subscribe(
      (res: any) => {
        console.log(res);
        this.questions = res;
        this.timer = this.questions.length * 0.30 * 100;
        this.StartTimer();
      }
    )
  }

  getFomatedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;

    return `${mm}:${ss}`
  }

  StartTimer() {
    let t = window.setInterval(
      () => {

        if (this.timer <= 0) {
          clearInterval(t);
          this.autosbmit()
        }
        else {
          this.timer--
        }
      },
      1000
    )
  }

  submit() {

    Swal.fire({
      title: 'Are you sure?',
      text: "Do You Want To end Exam!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit Exam!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.directSubmit();
      }
    })

  }

  autosbmit(){
    this.directSubmit();
  }
  directSubmit() {
  
    this.questionservice.directSubmit(this.questions).subscribe(
      (res: any) => {
        console.log(res);
        this.isSubmit = true;
        this.attempted = res.attempted;
        this.correctAnswers = res.correctAnswers;
        this.marksGot = res.marksGot;
        this.marksGot=parseFloat(Number(res.marksGot).toFixed(2));


  
        // this.router.navigate(['/result'])
        

      }
    )
  }

  printReslut(){
    window.print()
  }

}


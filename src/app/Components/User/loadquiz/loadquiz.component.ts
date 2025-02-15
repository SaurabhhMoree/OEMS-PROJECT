import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/Services/Quiz-Service/quiz.service';

@Component({
  selector: 'app-loadquiz',
  templateUrl: './loadquiz.component.html',
  styleUrls: ['./loadquiz.component.css']
})
export class LoadquizComponent implements OnInit {

  constructor(private quizservice: QuizService, private activatedroute: ActivatedRoute) { }

  categoryId: any;
  quizzes: any;


  ngOnInit(): void {

    this.activatedroute.params.subscribe(
      (res: any) => {
        console.log(res.category_id);
        this.categoryId = res.category_id;


        if (this.categoryId == 0) {
          this.quizservice.getActiveQuiz().subscribe(
            (res: any) => {
              console.log(res);
              this.quizzes = res;
            }
          )
        }

        else {
          this.quizservice.getActiveQuizById(this.categoryId).subscribe(
            (res: any) => {
              console.log(res);
              this.quizzes = res;
            }
          )
        }

      }
    )

  }
}

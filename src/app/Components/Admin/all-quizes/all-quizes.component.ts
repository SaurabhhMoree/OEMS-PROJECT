import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/Services/Quiz-Service/quiz.service';

@Component({
  selector: 'app-all-quizes',
  templateUrl: './all-quizes.component.html',
  styleUrls: ['./all-quizes.component.css']
})
export class AllQuizesComponent implements OnInit {

  getallquizdata: any;

  constructor(private quizservice: QuizService) { }


  ngOnInit(): void {
    this.getAllQuizData();
  }

  getAllQuizData() {
    this.quizservice.getAllQuizData().subscribe(
      (res: any) => {
        console.log(res);
        this.getallquizdata = res;
      })
  }
  deleteQuizById(quiz_id: any) {
    this.quizservice.deleteQuiz(quiz_id).subscribe(
      (res:any) =>{
        console.log(res);
        this.getAllQuizData();
        
      }
    )
      }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/Question-service/question.service';

@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit {

  QuestionId: any;
  QuizTitle: any
  getQuestionsData: any;

  constructor(private question: QuestionService, private activatedroute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      (res: any) => {
        console.log(res);
        this.QuestionId = res.id;
        this.QuizTitle = res.title;

      }
    );
    this.question.getQuestionById(this.QuestionId).subscribe(
      (res: any) => {
        console.log(res);
        this.getQuestionsData = res;
      }
    )
  }

  UpdateQuestioForm: FormGroup = new FormGroup({
    "content": new FormControl(null, [Validators.required]),
    "option1": new FormControl(null, [Validators.required]),
    "option2": new FormControl(null, [Validators.required]),
    "option3": new FormControl(null, [Validators.required]),
    "option4": new FormControl(null, [Validators.required]),
    "answer": new FormControl(null, [Validators.required]),

  });


  UpdateQuestionData() {
    console.log(this.UpdateQuestioForm.value);

    let setupdatedata = {
      "question_id": this.QuestionId,
      "content": this.UpdateQuestioForm.value.content,
      "option1": this.UpdateQuestioForm.value.option1,
      "option2": this.UpdateQuestioForm.value.option2,
      "option3": this.UpdateQuestioForm.value.option3,
      "option4": this.UpdateQuestioForm.value.option4,
      "answer": this.UpdateQuestioForm.value.answer,
      "quiz": { "quiz_id": this.getQuestionsData.quiz.quiz_id },

    }
    console.log(setupdatedata);
    this.question.updateQuestionData(setupdatedata).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate([`/admin-dash/view-question/${this.getQuestionsData.quiz.quiz_id}/${this.QuizTitle}`])
      }
    )
  }
}


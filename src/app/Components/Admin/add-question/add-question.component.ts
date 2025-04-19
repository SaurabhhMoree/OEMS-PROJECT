import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/Question-service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})


export class AddQuestionComponent implements OnInit {

  addQuestioForm: FormGroup = new FormGroup({
    "content":new FormControl('',[Validators.required]),
    "option1":new FormControl('',[Validators.required]),
    "option2":new FormControl('',[Validators.required]),
    "option3":new FormControl('',[Validators.required]),
    "option4":new FormControl('',[Validators.required]),
    "answer":new FormControl('',[Validators.required]),

  });

  quizId:any;
  quizTitle:any;
  

  constructor(private questionservice:QuestionService, private router:Router , private activatedroute:ActivatedRoute){}


  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      (res:any)=>{
        console.log(res.id);
        this.quizId = res.id;
        this.quizTitle = res.title;
      }
    )   
  
  }


  addQuestions = {
    "content":this.addQuestioForm.value.content,
    "option1":this.addQuestioForm.value.option1,
    "option2":this.addQuestioForm.value.option2,
    "option3":this.addQuestioForm.value.option3,
    "option4":this.addQuestioForm.value.option4,
    "answer":this.addQuestioForm.value.answer,
  }
  
  AddQuestionData(){

    if (this.addQuestioForm.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'All fields are required. Please fill out all fields.',
        icon: 'error'
      });
      return;
    }

    console.log(this.addQuestioForm.value); 
    
    let addQuestions = {
      "content":this.addQuestioForm.value.content,
      "option1":this.addQuestioForm.value.option1,
      "option2":this.addQuestioForm.value.option2,
      "option3":this.addQuestioForm.value.option3,
      "option4":this.addQuestioForm.value.option4,
      "answer":this.addQuestioForm.value.answer,
      "quiz":{"quiz_id":this.quizId},

    }
    this.questionservice.addQuestions(addQuestions).subscribe(
      (res:any)=>{
        console.log(res);
        addQuestions = res;
        Swal.fire({
          title: `${res.content}`,
          text:'Quiz Added',
          icon:'success'
        }
        
      )
      this.addQuestioForm.reset();
      this.router.navigate(['view-question']);

        

        
      }
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getAllQuestionById(quiz_id: any) {
    return this.http.get(`${baseUrl}question/quiz/all/` + quiz_id)
  }


  public addQuestions(data: any) {
    return this.http.post(`${baseUrl}question/`, data)
  }


  public getQuestionById(question_id: any) {
    return this.http.get(`${baseUrl}question/` + question_id)
  }

  public updateQuestionData(data: any) {
    return this.http.put(`${baseUrl}question/`, data);
  }

  public DeleteQuestionById(question_id: any) {
    return this.http.delete(`${baseUrl}question/` + question_id);
  }

  public getQuestionByQuizId(quiz_id:any){
    return this.http.get(`${baseUrl}question/quiz/`+ quiz_id);
  }

  public directSubmit(question:any){
    return this.http.post(`${baseUrl}question/direct-quiz`,question);
  }
}



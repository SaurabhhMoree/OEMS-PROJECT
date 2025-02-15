import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http:HttpClient) { }

  public addCategory(data:any){
    return this.http.post(`${baseUrl}category/`,data)
  }

  public  getAllCategory(){
    return this.http.get(`${baseUrl}category/`)
  }

 DeleteCategoryById(category_id:any){
  return this.http.delete(`${baseUrl}category/`+category_id)
 }

 getCategoryById(category_id:any){
  return this.http.get(`${baseUrl}category/`+category_id)
 }

  updatecategory(data:any){
  return this.http.put(`${baseUrl}category/`,data)
 }
}

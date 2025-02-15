import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './Components/Admin/admin-sidebar/admin-sidebar.component';
import { AdminWelcomepageComponent } from './Components/Admin/admin-welcomepage/admin-welcomepage.component';
import {MatListModule} from '@angular/material/list';
import { AdminprofileComponent } from './Components/Admin/adminprofile/adminprofile.component';
import { AllCategoryComponent } from './Components/Admin/all-category/all-category.component';
import { AddCategoryComponent } from './Components/Admin/add-category/add-category.component';
import { UpdatecategoryComponent } from './Components/Admin/updatecategory/updatecategory.component';
import { AllQuizesComponent } from './Components/Admin/all-quizes/all-quizes.component';
import { AddquizComponent } from './Components/Admin/addquiz/addquiz.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ViewQuestionComponent } from './Components/Admin/view-question/view-question.component';
import { AddQuestionComponent } from './Components/Admin/add-question/add-question.component';
import { UpdateQuizComponent } from './Components/Admin/update-quiz/update-quiz.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './Services/intercepetor service/auth-interceptor.interceptor';
import { UserDashComponent } from './Components/User/user-dash/user-dash.component';
import { UserSidebarComponent } from './Components/User/user-sidebar/user-sidebar.component';
import { UserProfileComponent } from './Components/User/user-profile/user-profile.component';
import { UserWelcomeComponent } from './Components/User/user-welcome/user-welcome.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { UpdatequestionComponent } from './Components/Admin/updatequestion/updatequestion.component';
import { InstructionsComponent } from './Components/User/instructions/instructions.component';
import { LoadquizComponent } from './Components/User/loadquiz/loadquiz.component';
import { StartexamComponent } from './Components/User/startexam/startexam.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminWelcomepageComponent,
    AdminprofileComponent,
    AllCategoryComponent,
    AddCategoryComponent,
    UpdatecategoryComponent,
    AllQuizesComponent,
    AddquizComponent,
    ViewQuestionComponent,
    AddQuestionComponent,
    UpdateQuizComponent,
    UserDashComponent,
    UserSidebarComponent,
    UserProfileComponent,
    UserWelcomeComponent,
    SignupComponent,
    UpdatequestionComponent,
    InstructionsComponent,
    LoadquizComponent,
    StartexamComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
   
  providers:[{provide:HTTP_INTERCEPTORS , useClass:AuthInterceptorInterceptor, multi:true}],

  bootstrap: [AppComponent]
})
export class AppModule { }

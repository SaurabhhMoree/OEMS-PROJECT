import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { AdminWelcomepageComponent } from './Components/Admin/admin-welcomepage/admin-welcomepage.component';
import { AdminprofileComponent } from './Components/Admin/adminprofile/adminprofile.component';
import { AllCategoryComponent } from './Components/Admin/all-category/all-category.component';
import { AddCategoryComponent } from './Components/Admin/add-category/add-category.component';
import { UpdatecategoryComponent } from './Components/Admin/updatecategory/updatecategory.component';
import { AllQuizesComponent } from './Components/Admin/all-quizes/all-quizes.component';
import { AddquizComponent } from './Components/Admin/addquiz/addquiz.component';
import { ViewQuestionComponent } from './Components/Admin/view-question/view-question.component';
import { AddQuestionComponent } from './Components/Admin/add-question/add-question.component';
import { UpdateQuizComponent } from './Components/Admin/update-quiz/update-quiz.component';
import { AdminGuard } from './Services/Admin-Guard/admin.guard';
import { UserDashComponent } from './Components/User/user-dash/user-dash.component';
import { UserSidebarComponent } from './Components/User/user-sidebar/user-sidebar.component';
import { UserProfileComponent } from './Components/User/user-profile/user-profile.component';
import { UserWelcomeComponent } from './Components/User/user-welcome/user-welcome.component';
import { UserGuard } from './Services/User-Guard/user.guard';
import { UpdatequestionComponent } from './Components/Admin/updatequestion/updatequestion.component';
import { InstructionsComponent } from './Components/User/instructions/instructions.component';
import { LoadquizComponent } from './Components/User/loadquiz/loadquiz.component';
import { StartexamComponent } from './Components/User/startexam/startexam.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'login',component:LoginComponent},

  {path:'signup', component:SignupComponent},

  {path:'admin-dash', component:AdminDashboardComponent,
  canActivate:[AdminGuard],
  children:[
    {path:'',component:AdminWelcomepageComponent},

    {path:'admin-profie',component:AdminprofileComponent},

    {path:'all-cat',component:AllCategoryComponent},

    {path:'add-cat',component:AddCategoryComponent},
 
    {path:'update-cat/:id',component:UpdatecategoryComponent},

    {path:'all-quiz',component:AllQuizesComponent},

    {path:'add-quiz',component:AddquizComponent},

    {path:'view-question/:id/:title',component:ViewQuestionComponent},

    {path:'add-question/:id/:title',component:AddQuestionComponent},

    {path:'update-question/:id/:title',component:UpdatequestionComponent},


    {path:'update-quiz/:id',component:UpdateQuizComponent},

  ]




},

// user dash borad all work

{path:'user-dash',component:UserDashComponent,

canActivate:[UserGuard],

children:[
{path:'',component:UserWelcomeComponent},

{path:'user-profile',component:UserProfileComponent},

{path:':category_id',component:LoadquizComponent},

{path:'instructions/:quiz_id',component:InstructionsComponent},
]
},

{path:'StartExam/:quiz_id',component:StartexamComponent},



 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

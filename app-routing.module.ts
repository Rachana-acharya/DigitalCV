import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
//import { CareerComponent } from './career/career.component';
//import { CoursesComponent } from './courses/courses.component';
//import { AngularCourseComponent } from './angular-course/angular-course.component';
//import { ReactCourseComponent } from './react-course/react-course.component';
//import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'contact',component:ContactComponent},
{path:'education',component:EducationComponent},
{path:'skills',component:SkillsComponent},
{path:'project',component:ProjectComponent}
//{path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { JavaComponent } from './java/java.component';
import { AngularComponent } from './angular/angular.component';
import { TestingComponent } from './testing/testing.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { PythonComponent } from './python/python.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'java', component: JavaComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'python', component: PythonComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

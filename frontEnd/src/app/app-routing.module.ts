import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { QuestionComponent } from './questions/question.component';
import { QuestionslistComponent } from './questions/questionslist.component';
import { QuizComponent } from './quizzes/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'question/:quizId',
    component: QuestionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

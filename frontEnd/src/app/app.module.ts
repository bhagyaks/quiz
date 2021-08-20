import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponent } from './questions/question.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import { AppService } from './app.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuestionslistComponent } from './questions/questionslist.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuizComponent } from './quizzes/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { RegisterComponent } from './account/register.component';
import { LoginComponent } from './account/login.component';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { PlayComponent } from './play/play.component';
import { PlayQuizComponent } from './play/playQuiz.component';
import { ResultPopUpComponent } from './play/resultPopUp.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    QuestionComponent,
    QuestionslistComponent,
    QuizComponent,
    QuizzesComponent,
    PlayComponent,
    PlayQuizComponent,
    ResultPopUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
  ],
  providers: [AppService, AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
  entryComponents: [ResultPopUpComponent],
})
export class AppModule { }

import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
@Component({
    selector : 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {
    quiz: any = {};
    postSuccess = false;
    constructor(public service: AppService){}
    ngOnInit(){
        this.service.quizSelected.subscribe(q => this.quiz = q);
    }
    postQuiz(res: any){
        this.service.postQuiz(res).subscribe((res) => {
            this.quiz = {};
            this.postSuccess = true;
        });;
    }
}
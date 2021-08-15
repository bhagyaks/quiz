import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
@Component({
    selector : 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {
    quiz: any = {};
    constructor(public service: AppService){}
    ngOnInit(){
        this.service.quizSelected.subscribe(q => this.quiz = q);
    }
}
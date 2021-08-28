import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector : 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit {
    questions: any = {};
    quizId: number  = 0;
    constructor(public service: AppService,
        private route: ActivatedRoute){}
    ngOnInit(){
        this.route.params.subscribe((param) => {
            this.quizId = Number.parseInt(param['quizId']);
        })
        this.service.questionSelected.subscribe(question => this.questions = question);
    }
    postQuestions(question: any) {
        question.quizId = this.quizId;
        this.service.postQuestions(question);
        this.questions = {};
    }
}
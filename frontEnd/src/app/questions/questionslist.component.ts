import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppService } from "../app.service";
@Component({
    selector : 'questionslist',
    templateUrl: './questionslist.component.html'
})
export class QuestionslistComponent  implements OnInit{
    questionslist: any;
    constructor(public service: AppService,
        private route: ActivatedRoute){}
    ngOnInit(){
        let quizId;
        this.route.params.subscribe((param) => {
            quizId = Number.parseInt(param['quizId']);
        })
        this.service.getQuestions(quizId).subscribe((res) => {
            this.questionslist = res;
        });
    }
}
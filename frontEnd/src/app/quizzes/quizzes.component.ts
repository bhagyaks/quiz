import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
@Component({
    selector : 'quizzes',
    templateUrl: './quizzes.component.html'
})
export class QuizzesComponent  implements OnInit{
    quizzes: any;
    constructor(public service: AppService){}
    ngOnInit(){
        this.service.getQuiz().subscribe((res) => {
            this.quizzes = res;
        });
    }
}
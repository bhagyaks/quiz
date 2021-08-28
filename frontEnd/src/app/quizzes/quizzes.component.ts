import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { AppService } from "../app.service";
@Component({
    selector : 'quizzes',
    templateUrl: './quizzes.component.html'
})
export class QuizzesComponent  implements OnInit, OnChanges{
    @Input() success = false;
    quizzes: any;
    constructor(public service: AppService){}
    ngOnChanges(change: SimpleChanges) {
        if(change['success'].previousValue !== undefined && change['success'].currentValue !== change['success'].previousValue) {
            this.getQuiz();
        }
    }
    ngOnInit(){
        this.getQuiz();
    }
    getQuiz(){
        this.service.getQuiz().subscribe((res) => {
            this.quizzes = res;
        });
    }
}
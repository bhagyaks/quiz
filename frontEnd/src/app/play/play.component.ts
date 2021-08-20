import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
@Component({
    selector : 'play',
    templateUrl: './play.component.html'
})
export class PlayComponent  implements OnInit{
    quizzes: any;
    constructor(public service: AppService){}
    ngOnInit(){
        this.service.getAllQuiz().subscribe((res) => {
            this.quizzes = res;
        });
    }
}
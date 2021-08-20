import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppService } from "../app.service";
import {MatDialog} from '@angular/material/dialog';
import { ResultPopUpComponent } from "./resultPopUp.component";
@Component({
    templateUrl: './playQuiz.component.html',
    styleUrls: ['./playQuiz.component.html.scss'],
})
export class PlayQuizComponent  implements OnInit{
    questions: any;
    step = 0;
    constructor(public service: AppService,
        public activeRoute: ActivatedRoute,
        public route: Router,
        public dialog: MatDialog){}
    ngOnInit(){
        let quizId;
        this.activeRoute.params.subscribe((param) => {
            quizId = Number.parseInt(param['quizId']);
        });
        this.service.getQuestions(quizId).subscribe((res) => {
            this.questions = res;
            this.questions.forEach((q: any) => {
                q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3];
                this.shuffleArray(q.answers);
            });
        });
    }
    setStep(index: number) {
        this.step = index;
      }
    
    nextStep() {
        this.step++;
      }
    
    prevStep() {
        this.step--;
      }
    shuffleArray(array: any) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    finish(){
        let correct = 0;
        this.questions.forEach((question: any) => {
            if(question.correctAnswer === question.selectedAnswer) {
                correct++;
            }
        });
        const dialogRef = this.dialog.open(ResultPopUpComponent, {
            data : {
                correct: correct,
                total: this.questions.length,
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('dialog result', result);
            if(result) {
                this.route.navigate(['/play']);
            }
        });
    }
}
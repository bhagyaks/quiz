import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Subject } from "rxjs";
@Injectable()
export class AppService {
    selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();
    selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();
    constructor(private http: HttpClient){}
    getQuestions(quizId: any) {
        return this.http.get(`https://localhost:44397/api/questions/${quizId}`);
    }
    postQuestions(question: any) {
        this.http.post('https://localhost:44397/api/questions', question).subscribe((res) => {
            console.log(res);
        });
    }
    putQuestions(question: any) {
        this.http.put(`https://localhost:44397/api/questions/${question.id}`, question).subscribe((res) => {
            console.log(res);
        });
    }
    getQuiz() {
        return this.http.get('https://localhost:44397/api/quizzes');
    }
    putQuiz(quiz: any) {
        this.http.put(`https://localhost:44397/api/quizzes/${quiz.id}`, quiz).subscribe((res) => {
            console.log(res);
        });
    }
    postQuiz(quiz: any) {
        this.http.post('https://localhost:44397/api/quizzes', quiz).subscribe((res) => {
            console.log(res);
        });
    }
    selectQuestion(question: any){
        this.selectedQuestion.next(question);
    }
    selectQuiz(quiz: any){
        this.selectedQuiz.next(quiz);
    }
}
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
@Injectable()
export class AuthService {
    constructor(private http: HttpClient){}
    register(credentials: any) {
        this.http.post<any>('https://localhost:44397/api/account', credentials).subscribe((res)=> {
            localStorage.setItem('token', res);
        });
    }
    login(credentials: any) {
        this.http.post('https://localhost:44397/api/account/login', credentials).subscribe((res) => {
            console.log(res);
        });
    }
}
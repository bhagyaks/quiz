import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
@Component({
    selector : 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    form: any;
    constructor(private fb: FormBuilder, private auth: AuthService){}
    ngOnInit(){
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
    submit(event: any) {
        if(this.form.valid) {
            this.auth.login(this.form.value);
        }
    }
}
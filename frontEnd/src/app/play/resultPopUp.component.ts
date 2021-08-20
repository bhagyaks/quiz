import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './resultPopUp.component.html',
})
export class ResultPopUpComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

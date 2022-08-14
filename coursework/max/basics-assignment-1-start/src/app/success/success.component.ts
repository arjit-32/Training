import { Component } from "@angular/core";

@Component({
    selector: 'success',
    templateUrl: 'success.component.html',
    styleUrls: ['success.component.css']
})
export class Success{
    msg: string = 'Success, You have successfully passed !';
}
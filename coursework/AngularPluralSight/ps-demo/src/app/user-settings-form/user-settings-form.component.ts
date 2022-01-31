import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  showBanner: boolean = false;

  userSettings: UserSettings = {
    name: '',
    emailOffers: true,
    interfaceStyle: '',
    subscriptionType: '',
    notes: ''
  };

  subscriptionTypes: string[] = ['monthly','annual','lifetime'];

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
  }

  OnBlur(field: NgModel){
    if(field.value==='lifetime'){
      this.showBanner = true;
    }else this.showBanner = false;
  }

  onSubmit(form: NgForm): void{
    this.dataservice.postUserSettingsForm(this.userSettings).subscribe({
      next: result => console.log('successfully posted data on server',result),
      error: error => console.log('error', error)
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Register } from './register';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html'
})
export class TemplateDrivenFormComponent implements OnInit {

  public register: Register;
  public genders: string[];
  public courses: string[];

  constructor() {
    this.register = new Register('', '', '', '');
   }

  ngOnInit() {
    this.genders = ['M', 'F'];
    this.courses = ['Angular 7', 'Flutter', 'BE', 'TensorFlow'];
  }

  onSubmit() {
    console.log('Register object: ', JSON.stringify(this.register, null, 2));
  }

  notificationStatus(e) {
    this.register.notification = e.target.checked;
  }

}

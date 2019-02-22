import { Component, OnInit } from '@angular/core';
import { IUser } from './IUser';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})

export class StructuralComponent implements OnInit, IUser {

  public area: string;

  title = 'Directivas Estruturadas';

  /**  Definidos por la Interface*/
  name: string;
  code: number;
  role: string;
  ready: boolean;
  incomes: Array<any>;
  exits: any[];
  general: {};

  constructor() { }

  getData(): string {
       return `name: ${ this.name }, code: ${ this.code },
               role: ${ this.role }, ready: ${ this.ready }
               incomes: ${ this.incomes }, exits: ${ this.exits }`;
  }

  toString(){
    console.log(this.getData());
  }

  ngOnInit() {
    this.name = 'Bob pantalones cuadrados';
    this.code = 123;
    this.role = 'Cheff';
    this.ready = false;
    this.incomes = [];
    this.exits = [];
    this.general = {
      imageDev: '../../assets/images/dev.jpeg',
      imageQA: '../../assets/images/qa.png',
      imageDevOps: '../../assets/images/devops.png'
    };
    this.generateUserData(5);
  }

  private random(min: number, max: number ): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private generateUserData(top: number) {
    for (let i = 0; i < top; i++) {
      this.incomes.push('' + this.random(7, 10) + ':' + this.random(0, 59));
      this.exits.push('' + this.random(16, 23) + ':' + this.random(0, 59));
    }
  }

  public onOff() {
    this.ready = !this.ready;
    console.log('entre ');
  }

}

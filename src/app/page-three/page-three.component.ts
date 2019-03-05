import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {

  public titulo: string = "Pagina 3";
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
       // para recoger parametros de la URL:
       // this._route.params.forEach(function(params: Params){
        this._route.params.forEach((params: Params) => {
          this.parametro = params['id'];
          console.log(params);
         });
  }

  navigateToThree(){
    this._router.navigate(['/three', '123'], {skipLocationChange: true});
  }

  navigateToTwo(){
      this._router.navigate(['/two']);
  }

}

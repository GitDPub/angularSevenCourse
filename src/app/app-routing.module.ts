import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'one', component: PageOneComponent },
  { path: 'two', component: PageTwoComponent },
  { path: 'three', component: PageThreeComponent },
  { path: 'three/:id', component: PageThreeComponent },
  { path: 'four', component: PageFourComponent }
  // { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

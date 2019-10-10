import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetsComponent } from "./components/tweets/tweets.component";
const routes: Routes =
  [
    { path: "", component: TweetsComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

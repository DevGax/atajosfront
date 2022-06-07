import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimatedbackgroundComponent } from './components/animatedbackground/animatedbackground.component';
import { HomeComponent } from './components/home/home.component';
import { UIComponent } from './components/ui/ui.component';

const routes: Routes = [
  { path:"", component : HomeComponent },
  { path:"UI", component : UIComponent },
  { path:"animatedbackground", component : AnimatedbackgroundComponent },
  //animatedbackground
  { path: "", redirectTo:"/", pathMatch : "full" },
  { path: "**", redirectTo: "/", pathMatch : "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

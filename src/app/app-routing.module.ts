import { CastComponent } from './componentes/cast/cast.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'cast',component:CastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

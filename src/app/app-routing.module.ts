import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaneldashboardComponent } from './paneldashboard/paneldashboard.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component:PaneldashboardComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

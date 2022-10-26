import { AmalComponent } from './frontoffice/amal/amal.component';
import { DashbordComponent } from './backoffice/dashbord/dashbord.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'dashbord',component:DashbordComponent},
  {path:'plateform',component:AmalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

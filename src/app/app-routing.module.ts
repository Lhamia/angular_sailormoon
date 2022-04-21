import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackmoonDetailsComponent } from './pages/blackmoon/blackmoon-details/blackmoon-details.component';
import { BlackmoonComponent } from './pages/blackmoon/blackmoon.component';

import { HomeComponent } from './pages/home/home.component';
import { SailorsDetailComponent } from './pages/sailors-detail/sailors-detail.component';
import { SailorsComponent } from './pages/sailors/sailors.component';

const routes: Routes = [
  { path:'',  pathMatch: "full",component: HomeComponent },
  {path:'sailors', component: SailorsComponent},
  {path:'sailors/:sailorID',
   component: SailorsDetailComponent},
  {path:'blackmoon', component: BlackmoonComponent},
  {path:'sister/:sisterID',
   component: BlackmoonDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

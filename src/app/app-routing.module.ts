import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConsultasComponent } from './consultas/consultas.component';
//import { UserIdComponent } from './user-id/user-id.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},  
  { path: 'home', component: HomeComponent },
  { path: 'consultas', component: ConsultasComponent},
  //{ path: 'user-id', component: UserIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

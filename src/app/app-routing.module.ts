import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { UserIdComponent } from './user-id/user-id.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { TarefaIdComponent } from './tarefa-id/tarefa-id.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},  
  { path: 'home', component: HomeComponent },
  { path: 'consultas', component: ConsultasComponent},
  { path: 'user-id', component: UserIdComponent},
  { path: 'tarefas', component: TarefasComponent},
  { path: 'tarefa-id', component: TarefaIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

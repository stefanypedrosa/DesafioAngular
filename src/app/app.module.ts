//importações do framework do Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importações especificas da minha aplicação
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { UserIdComponent } from './user-id/user-id.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { TarefaIdComponent } from './tarefa-id/tarefa-id.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    NavbarComponent,
    HomeComponent,
    ConsultasComponent,
    RodapeComponent,
    UserIdComponent,
    TarefasComponent,
    TarefaIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

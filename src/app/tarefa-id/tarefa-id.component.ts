import { Component, OnInit } from '@angular/core';
import { UserService } from './../service/user.service';
import { Tasks } from './../model/tasks';
import { User } from './../model/user';

@Component({
  selector: 'app-tarefa-id',
  templateUrl: './tarefa-id.component.html',
  styleUrls: ['./tarefa-id.component.css']
})
export class TarefaIdComponent implements OnInit {
  private idB:number;
  private _msgErro:string = null;

  _tarefa: Tasks = null; 

  constructor(private UserService:UserService) { }

  ngOnInit() {
  }
  searchClick(){
    if(this.idB<1 || this.idB >200){
      this._msgErro = "Dado inválido";
      this.idB = null;
    }
    else{
      this._msgErro = null;
      this.UserService.getId(this.idB).subscribe((tar: Tasks)=>{this._tarefa = tar;})
      this.idB = null;
    }
  }
}
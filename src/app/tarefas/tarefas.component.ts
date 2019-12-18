import { Component, OnInit } from '@angular/core';
import { UserService } from './../service/user.service';
import { User } from './../model/user';
import { Tasks } from './../model/tasks'

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  //private idR:number = Tasks.userId;
  constructor(private UserService: UserService) { }

  public tasks: Tasks[];
  public users: User;
  ngOnInit() {
    this.mostraTudo();
  }

  public mostraTudo(){
    this.UserService.getTarefas().subscribe((tar: Tasks[])=>{this.tasks = tar;})
    this.UserService.get(this.idR).subscribe((userOut:User)=>{this.users = userOut;})
  }

}

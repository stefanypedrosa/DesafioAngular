import { Component, OnInit } from '@angular/core';
import { UserService } from './../service/user.service';
import { User } from './../model/user';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  constructor(private UserService: UserService) { }

  users: User[];
  ngOnInit() {
    this.findAll();
  }

  public findAll(){
    this.UserService.getAll().subscribe((userOut: User[]) => {this.users = userOut;})
  }

}
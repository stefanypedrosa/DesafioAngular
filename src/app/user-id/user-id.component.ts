import { Component, OnInit } from '@angular/core';
import { User } from './../model/user';
import { UserService } from './../service/user.service';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {
  private idBusca:number;
  private _msgErro:string = null;

  _user:User = null;

  constructor(private UserService:UserService) { }

  ngOnInit() {
  }
  searchClick(){
    if(this.idBusca<1 || this.idBusca >10){
      this._msgErro = "Dado inválido";
      this.idBusca = null;
    }
    else{
      this._msgErro = null;
      this.UserService.get(this.idBusca).subscribe((UserOut: User)=>{this._user = UserOut;})
      this.idBusca = null;
    }
  }

}

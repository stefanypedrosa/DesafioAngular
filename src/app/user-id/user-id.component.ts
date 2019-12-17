import { Component, OnInit } from '@angular/core';
import { User } from './../model/user';
import { UserService } from './../service/user.service';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {
  id:number;
  user:User = new User(0,"","","",null,"","",null)

  constructor(private UserService:UserService) { }

  ngOnInit() {
  }
  searchClick(){
    this.UserService.get(this.id).subscribe((UserOut: User)=>{this.user = UserOut;})
  }

}

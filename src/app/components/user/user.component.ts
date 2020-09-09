import { Component, OnInit } from '@angular/core';
import { UserTable } from 'src/app/Model/UserTable';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users:UserTable[];
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(data =>{
      this.users=data;
    });
  }
  getAllUsersFun()
  {
    this._userService.getAllUsers().subscribe(data =>{
      this.users=data
    });
  }
   addUser()
   {
     this._router.navigate(['adduser']);
   }
   editUser()
   {
     this._router.navigate(['edituser']);
   }
  deleteUser(object:UserTable)
  {
     this._userService.deleteUser(object.id).subscribe(response =>{
       this.users=this.users.filter(item =>item.id !== object.id);
     });
    //  let index=this.users.indexOf(object);
    //  this.users.splice(index,1);
  }

}

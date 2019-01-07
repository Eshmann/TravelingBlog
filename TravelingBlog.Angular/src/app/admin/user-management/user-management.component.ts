import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { User } from '../Models/User';

import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users:User[];  
  tableMode:boolean = true;


  userToEditRoles:User;
  roles:any;
  
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.getUsersWithRoles();
  }

  getUsersWithRoles(){
    this.adminService.getUsersWithRoles()
    .subscribe(res=>{
      this.users = res;
    })
  }
  
  save(){

    let rolles = {
      roleNames: [...this.roles.filter(el=>el.checked===true).map(el=>el.name)] 
    }
    if(rolles.roleNames){
      this.adminService.updateUserRoles(this.userToEditRoles,rolles).subscribe(
        res=>{
          this.userToEditRoles.roles = [...res]
        }
      );
    }
    this.tableMode=true;
  }

  cancel(){
    this.userToEditRoles = new User();
    this.tableMode = true;
    this.roles = []; 
  }

  editRolesModal(user:User){
    this.userToEditRoles = new User();
    this.roles = [];
    this.cancel();
    this.userToEditRoles = user;
    this.roles = this.getRolesArray(user);
    this.tableMode = false;
  }

  private getRolesArray(user:User) {
    const roles = [];
    const userRoles = user.roles;
    const availableRoles: any[] = [
      {name: 'Admin', value: 'Admin'},
      {name: 'Moderator', value: 'Moderator'},
      {name: 'Member', value: 'Member'}
    ];

    for (let i = 0; i < availableRoles.length; i++) {
      let isMatch = false;
      for (let j = 0; j < userRoles.length; j++) {
        if (availableRoles[i].name === userRoles[j]) {
          isMatch = true;
          availableRoles[i].checked = true;
          roles.push(availableRoles[i]);
          break;
        }
      }
      if (!isMatch) {
        availableRoles[i].checked = false;
        roles.push(availableRoles[i]);
      }
    }
    return roles;
  }
}

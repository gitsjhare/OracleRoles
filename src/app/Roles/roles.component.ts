import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit, Roles {
  Roles: RoleData[];
  UserName: string;
  constructor() {
    this.Roles = this.SetupRoles();
   }

  ngOnInit() {
  }
private SetupRoles() {
let UserRoles: RoleData[];
UserRoles = [
  {UserRole: 'Supervisor Role', UserRolesVal: false},
  {UserRole: 'Scheduling Operator', UserRolesVal: false},
  {UserRole: 'Test Center Operator', UserRolesVal: false}
];
return UserRoles;
}
}

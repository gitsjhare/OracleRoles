import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit, Roles {
  UserRoleGrid: Roles[];
  Roles: RoleData[];
  UserName: string;
  AddNewRole: Roles[];

  constructor() {
    this.Roles = this.SetupRoles();
  }

  ngOnInit() {
    this.GetUserforGrid();
  }
  private SetupRoles() {
    let UserRoles: RoleData[];
    UserRoles = [
      { UserRole: 'Supervisor Role', UserRolesVal: false },
      { UserRole: 'Scheduling Operator', UserRolesVal: false },
      { UserRole: 'Test Center Operator', UserRolesVal: false }
    ];
    return UserRoles;
  }
  private GetUserforGrid() {
    this.UserRoleGrid = [
      {
        UserName: 'First User',
        Roles:
          [
            { UserRole: 'Supervisor Role', UserRolesVal: true },
            { UserRole: 'Scheduling Role', UserRolesVal: false },
            { UserRole: 'Test Center Operator', UserRolesVal: true }
          ]
      },
      {
        UserName: 'Second User',
        Roles:
          [
            { UserRole: 'Supervisor Role', UserRolesVal: true },
            { UserRole: 'Test Center Operator', UserRolesVal: true }
          ]
      },
      {
        UserName: 'Third User',
        Roles:
          [
            { UserRole: 'Supervisor Role', UserRolesVal: true },
          ]
      },
      {
        UserName: 'Fourth User',
        Roles:
          [
            { UserRole: 'Scheduling Role', UserRolesVal: false },
            { UserRole: 'Test Center Operator', UserRolesVal: true }
          ]
      }
    ];
  }
  public UpdateRoles() {
   const SRolesArray: RoleData[] = new Array();
    if (this.UserName !== undefined && this.UserName !== '') {
      this.Roles.forEach(function (value) {
        if (value.UserRolesVal === true) {
          SRolesArray.push({UserRole: value.UserRole, UserRolesVal: value.UserRolesVal});
        }
      });
      console.log(SRolesArray);
      this.AddNewRole = [{
        UserName: this.UserName,
        Roles: SRolesArray
      }];
      this.UserRoleGrid.push(this.AddNewRole[0]);
    }
  }
}

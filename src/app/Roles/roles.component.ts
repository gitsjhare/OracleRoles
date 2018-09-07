import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
 import {RoleServiceService} from '../Service/role-service.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
   providers: [RoleServiceService]
})
export class RolesComponent implements OnInit, Roles {
  OracleRoles: string;
  GetMethod: string;
  UserRoleGrid: Roles[];
  Roles: RoleData[];
  UserName: string;
  AddNewRole: Roles[];
  constructor(private roleservice: RoleServiceService) {
    this.Roles = this.SetupRoles();
  }

  ngOnInit() {
/*this.roleservice.GetAPInMethod().subscribe((result) => {
  this.apiPath = result; console.log(result);
});*/

  this.roleservice.GetUserRoles().subscribe((result) => {
      this.UserRoleGrid = result;
     }, (error) => {alert('API is not Working!'); });
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

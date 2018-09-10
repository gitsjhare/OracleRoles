import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { RoleServiceService } from '../Service/role-service.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [RoleServiceService]
})
export class RolesComponent implements OnInit, Roles {
  UserRoleGrid: Roles[];
  UserRole: OracleCreateuser[];
  Roles: RoleData[];
  UserName: string;
  AddNewRole: Roles;
  oracleRoleUpdate: OracleRoleUpdate[];
  formControl: any;

  constructor(private roleservice: RoleServiceService) {
    this.Roles = this.SetupRoles();
    this.formControl = new FormControl();
  }

  ngOnInit() {
    this.LoadGridData();
  }

  private SetupRoles() {
    let UserRoles: RoleData[];
    UserRoles = [
      { RoleName: 'Supervisor Role', RoleValue: false },
      { RoleName: 'Scheduling Operator', RoleValue: false },
      { RoleName: 'Test Center Operator', RoleValue: false }
    ];
    this.oracleRoleUpdate = new Array();
    this.oracleRoleUpdate = [
      { RoleName: 'Supervisor Role', OracleRoleName: 'SupervisorRole', RoleValue: 'true' },
      { RoleName: 'Scheduling Operator', OracleRoleName: 'SchedulingOperator', RoleValue: 'true' },
      { RoleName: 'Test Center Operator', OracleRoleName: 'TestCenterOperator', RoleValue: 'true' }];
    return UserRoles;
  }
  public UpdateRoles() {
    const SRolesArray: OracleCreateuser[] = new Array();
    if (this.UserName !== undefined && this.UserName !== '') {
      this.Roles.forEach((value) => {
          const SelectedRole = this.oracleRoleUpdate.find(item => item.RoleName === value.RoleName);
          SRolesArray.push({ RoleName: SelectedRole.OracleRoleName, RoleValue: (value.RoleValue) ? 'true' : 'false' });
      });
      this.AddNewRole = {
        UserName: this.UserName,
        UserRole: SRolesArray
      };
      this.roleservice.UpdateUserRoles(this.AddNewRole).subscribe((response) => {
        this.ResetForm();
        this.LoadGridData();
      }, (error) => {
        alert(error.statusText);
      });
    }
  }
  public DeleteRole(UserName) {
    if (confirm('Are you sure to delete!')) {
      const Result = this.roleservice.DeleteUser(UserName).subscribe((response) => {
        this.LoadGridData();
      },
        (error) => {
          alert(error.error.Message);
        }
      );
    }

  }

  private LoadGridData() {
    this.roleservice.GetUserRoles().subscribe((result) => {
      this.UserRoleGrid = result;
    }, (error) => { alert('API is not Working!'); });
  }
  private ResetForm() {
    this.UserName = '';
    this.Roles = this.SetupRoles();
  }

  public PreventSpacialChar(input) {
    const e = <KeyboardEvent> input;
    const RegExp = /^[0-9]*$/;
    if (e.key.match(RegExp)) {
      e.preventDefault();
    }
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {
  private PermissionAPI: string;
  public APIRoles: any;
  private APIPath: APIPath;
    constructor(private http: HttpClient, private httpp: Http) {
    this.PermissionAPI = 'http://svc.goamp.com/UserPermissions';
    // this.PermissionAPI = 'http://localhost:54961';
    this.GetAPInMethod();
    // console.log(this.APIRoles);
   // console.log(this.APIRoles);
  }

  public GetUserRoles(): Observable<Roles[]> {
    // this.PermissionAPI += '/api/values';
    this.PermissionAPI += '/GetUser';
    return this.http.get<Roles[]>(this.PermissionAPI);
  }

  public GetAPInMethod() {
   return this.http.get<APIPath>('assets/APILink.json').subscribe((response) => {
    console.log(response[0].OracleRoles);       // Printing the Value on Console

   this.APIPath.OracleRoles = response[0].OracleRoles;    // Making Error onward
   this.APIPath.GetMethod = response[0].GetMethod.toString();
  console.log(this.APIPath);
   });
  }


}

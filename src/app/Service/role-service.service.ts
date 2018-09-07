import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {
  private PermissionAPI: string;
  constructor(private http: HttpClient) {
     this.PermissionAPI = 'http://svc.goamp.com/UserPermissions';
  // this.PermissionAPI = 'http://localhost:54961';
  }

  public GetUserRoles(): Observable<Roles[]> {
   // this.PermissionAPI += '/api/values';
   this.PermissionAPI += '/GetUser';
  return this.http.get<Roles[]>(this.PermissionAPI);
  }
}

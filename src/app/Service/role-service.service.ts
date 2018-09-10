import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RoleServiceService {
    private PermissionAPI: string;
    constructor(private http: HttpClient) {
        this.PermissionAPI = 'https://testsvc.goamp.com/UserPermissions';
    }

    public GetUserRoles(): Observable<Roles[]> {
        const GetCall = this.PermissionAPI + '/GetUser';
        return this.http.get<Roles[]>(GetCall);
    }
    public UpdateUserRoles(AddNewRole: Roles): Observable<Roles> {
        const PostCall = this.PermissionAPI + '/CreateUser';
        return this.http.post<Roles>(PostCall, AddNewRole);
    }
    public DeleteUser(username: string): Observable<any> {
        const DeleteCall = this.PermissionAPI + '/Delete/' + username;
        return this.http.delete(DeleteCall);
    }
}

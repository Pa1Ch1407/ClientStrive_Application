import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseResult } from '../model/interface/role';
import { environment } from '../../environments/environment';
import { Client } from '../model/class/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllClients(): Observable<APIResponseResult>{
    return this.http.get<APIResponseResult>(environment.API_URL+"GetAllClients")
  }

   addOrupdate(obj:Client): Observable<APIResponseResult>{
    return this.http.post<APIResponseResult>(environment.API_URL+"AddUpdateClient", obj)
  }

   deleteRecord(id:number): Observable<APIResponseResult>{
    return this.http.delete<APIResponseResult>(environment.API_URL+"DeleteClientByClientId?clientId="+id)
  }
}

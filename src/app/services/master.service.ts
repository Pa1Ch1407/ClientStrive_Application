import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseResult } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getDesignation(): Observable<APIResponseResult>{
    return this.http.get<APIResponseResult>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  }
}

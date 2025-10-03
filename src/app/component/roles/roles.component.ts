import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { APIResponseResult, IRoles } from '../../model/interface/role';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  roleList: IRoles[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    // alert('came here');
    this.getAllRoles();
  }

  getAllRoles(){
    this.http.get<APIResponseResult>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
    .subscribe((result:APIResponseResult)=>{
      this.roleList = result.data;
    })
  }
}

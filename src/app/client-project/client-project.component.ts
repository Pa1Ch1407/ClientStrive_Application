import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIResponseResult, IEmployee } from '../model/interface/role';
import { Client } from '../model/class/Client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
  projectNameVar: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl('')
  })

  emplList: IEmployee[] = [];
  clientList: Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.getAllEmployees();
    this.getAllClients();
  }

  getAllEmployees(){
    this.clientService.getAllEmployees().subscribe((res:APIResponseResult)=>{
      this.emplList = res.data;
      // console.log(this.emplList);
    })
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe((res:APIResponseResult)=>{
      this.clientList = res.data;
      // console.log(this.clientList);
    })
  }

  saveClientProject(){
    const formResult = this.projectNameVar.value;
    console.log(formResult);
    this.clientService.addUpdateClientProject(formResult).subscribe((res:APIResponseResult)=>{
      if(res.result){
        alert('record saved.');
      }else{
        alert(res.message);
      }
    })
  }
}

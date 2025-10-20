import { Component, inject, OnInit, signal, OnChanges, SimpleChanges } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../model/class/Client';
import { APIResponseResult } from '../model/interface/role';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Constant } from '../Constants/constant';
import { MyButtonComponent } from "../resulableComponent/my-button/my-button.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit, OnChanges {

  clientList: Client[] = [];
  clientObj: Client = new Client();
  clientService = inject(ClientService);
  currentDate: Date = new Date();
  userJsonData$: Observable<any> = new Observable<any>;
  message: string= Constant.VALIDAIONMESSAGE.WELCOME_MESSAGE;
  applicationInfo = signal(false);

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
    this.loadClient();
    this.userJsonData$ = this.clientService.gettemporaryUsers();
  }



  //Get Clients
  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseResult) => {
      this.clientList = res.data;
      if(this.clientList.length>=1){
        this.applicationInfo.set(true);
      }
    })
  }

  //Save Clients
  onSaveClient(date: Date) {
    debugger;
    this.clientService.addOrupdate(this.clientObj).subscribe((res: APIResponseResult) => {
      if (res.result) {
        alert("Record Created successfully.");
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert(res.message);
      }
    })
  }

  //Delete the record
  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete the record?");
    if (isDelete) {
      this.clientService.deleteRecord(id).subscribe((res: APIResponseResult) => {
        if (res.result) {
          alert("Record deleted.");
          this.loadClient();
        } else {
          alert(res.message);
        }
      })
    }
  }

  //Editing the current record 
  onEdit(data: Client){
    this.clientObj = data;
  }

  //Reset to clear the data
  onReset(){
    this.clientObj = new Client();
  }

}

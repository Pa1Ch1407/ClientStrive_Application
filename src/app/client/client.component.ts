import { Component, inject, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../model/class/Client';
import { APIResponseResult } from '../model/interface/role';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientList: Client[] = [];
  clientObj: Client = new Client();
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }

  //Get Clients
  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseResult) => {
      this.clientList = res.data;
    })
  }

  //Save Clients
  onSaveClient() {
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

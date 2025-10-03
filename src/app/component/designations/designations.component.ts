import { Component, inject, OnInit } from '@angular/core';
import { APIResponseResult, IDesignations } from '../../model/interface/role';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-designations',
  standalone: true,
  imports: [],
  templateUrl: './designations.component.html',
  styleUrl: './designations.component.css'
})
export class DesignationsComponent implements OnInit{
    designationList: IDesignations[] = [];
    isLoading: boolean = true;
    masterService = inject(MasterService);

    ngOnInit(): void {
      this.masterService.getDesignation().subscribe((result:APIResponseResult)=>{
        this.designationList = result.data;
        this.isLoading = false;
      }, error=>{
        alert("Not known result/Netwrok Down.");
        this.isLoading = false;
      })
    }
}

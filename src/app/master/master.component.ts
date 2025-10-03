import { Component } from '@angular/core';
import { RolesComponent } from "../component/roles/roles.component";
import { DesignationsComponent } from "../component/designations/designations.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent, DesignationsComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentComponent: string = '';

  changeTab(tabName: string){
    this.currentComponent = tabName;
  }
}

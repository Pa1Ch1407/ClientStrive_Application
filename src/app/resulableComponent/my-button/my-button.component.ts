import { DatePipe } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';
  @Output() BtnClicked = new EventEmitter<any>();
  currentDate: Date = new Date();

  onClick(){
    this.BtnClicked.emit(this.currentDate);
  }
}

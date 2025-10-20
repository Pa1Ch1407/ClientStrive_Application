import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() data: string = '';

  constructor() {
    console.log('Constructor: called before anything else');
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.data = '';
    console.log('ngOnChanges: Input property changed');
  }

  ngOnInit() {
    console.log('ngOnInit: Component initialized');
  }

  ngDoCheck() {
    console.log('ngDoCheck: Change detection running');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: Content projected');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: Content checked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: View initialized');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: View checked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Component destroyed');
  }

}

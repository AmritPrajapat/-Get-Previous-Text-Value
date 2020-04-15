import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { IEmployee } from './child';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers:[EmpServiceService]
})
export class ChildComponent implements OnInit {
  @Input()
  myinput: string;

  @Output()
  setOutPut: EventEmitter<string> = new EventEmitter();
  myOutPutMsg: string = 'I am Child ';

  sendOutPut() {
    this.setOutPut.emit(this.myOutPutMsg);
  }

  constructor(private readonly empService: EmpServiceService) {
  }

  product : any;






  ngOnInit() {
   //this.product = this.empService.getEmployeeList();
    this.empService.getEmployees() 
   .subscribe(respone =>{
     this.product=respone;
     console.log(respone);
     console.log(this.product);
    });
  }









  getValueUsingId() {
    service: EmpServiceService;
    this.product = this.empService.getById(101);
  }
}
